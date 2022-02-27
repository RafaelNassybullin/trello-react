import React, { useReducer } from 'react';
import { DataContext } from "./DataContext";
import { cards, columns, comments } from "store";
import { DataReducer } from "./dataReducer";
import { ICards, IColumns, IColumnsState, IComment } from 'interfaces';

const INITIAL_STATE: IColumnsState = {
  mainData:[],
  columns:[...columns],
  cards:[...cards],
  comments:[...comments],
}

interface props {children: JSX.Element | JSX.Element[]}

export const DataProvider = ({ children }: props) => {

  const [dataState, dispatch] = useReducer(DataReducer, INITIAL_STATE);

  const pushLocalData = ( ) => {
    dispatch({type: 'PUSH_LOCAL_DATA'})
  }

  const addList = ( newList: IColumns ) => {
    dispatch({type: 'ADD_NEW_LIST', payload: newList})
  }

  const changeListTitle = ( id:string, value:string ) => {
    dispatch({type: 'CHANGE_LIST_TITLE', payload: {id, value}  } )
  }

  const addCards = ( card:ICards, list:IColumns ) => {
    dispatch({type: 'ADD_CARD', payload: {card, list}})
  }

  const openModal = ( card:ICards|undefined , list:boolean ) => {
    dispatch({type: 'OPEN_MODAL', payload: {card, list}})
  }

  const removeComment = (comment:IComment , list: IColumns, card:ICards) => {
    dispatch({type: 'REMOVE_COMMENT', payload: {comment, list, card}})
  }

  const changeDescriptions = ( descriptionValue: string , list: IColumns, card: ICards) => {
    dispatch({type: 'CHANGE_DESCRIPTIONS', payload: { descriptionValue , list, card }})
  }

  const changeCardTitles = ( titleValue:string, list: IColumns, card: ICards) => {
    dispatch({type: 'CHANGE_CARD_TITLES', payload: { titleValue, list, card }})
  }

  const addComment = ( commentValue:IComment, list: IColumns, card: ICards) => {
    dispatch({type: 'ADD_COMMENT', payload: { commentValue, list, card }})
  }

  const removeCard = (list: IColumns, card: ICards) => {
    dispatch({type: 'REMOVE_CARD', payload: { list,  card }})
  }

  const removeList = ( list: IColumns) => {
    dispatch({type: 'REMOVE_LIST', payload: {  list }})
  }

  return (
    <DataContext.Provider value={{
      dataState,
      addList,
      pushLocalData,
      changeListTitle,
      addCards,
      openModal,
      removeComment,
      changeDescriptions,
      changeCardTitles,
      addComment,
      removeCard,
      removeList
    }}>
      {children}
    </DataContext.Provider>
  )
}