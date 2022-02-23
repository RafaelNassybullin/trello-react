import React, {useReducer} from 'react';
import {DataContext} from "./DataContext";
import { listsData } from "../store";
import { DataReducer } from "./dataReducer";
import { ICards, IData, IDataState, IComment } from '../interfaces';

const INITIAL_STATE: IDataState = {
  datass:[...listsData]
}

interface props {children: JSX.Element | JSX.Element[]}

export const DataProvider = ({ children }: props) => {

  const [dataState, dispatch] = useReducer(DataReducer, INITIAL_STATE);

  const addLiss = ( newList: IData ) => {
    dispatch({type: 'ADD_NEW_LIST', payload: newList})
  }
  const changeListTitle = ( id:string, value:string ) => {
    dispatch({type: 'CHANGE_LIST_TITLE', payload: {id, value}  } )
  }
  const addCards = ( card:ICards, list:IData ) => {
    dispatch({type: 'ADD_CARD', payload: {card, list}})
  }
  const openModal = ( card:ICards , list:boolean ) => {
    dispatch({type: 'OPEN_MODAL', payload: {card, list}})
  }
  const removeComment = (comment:IComment , list: IData, card:ICards) => {
    dispatch({type: 'REMOVE_COMMENT', payload: {comment, list, card}})
  }
  const changeDescriptions = ( descriptionValue: string , list: IData, card: ICards) => {
    dispatch({type: 'CHANGE_DESCRIPTIONS', payload: { descriptionValue , list, card }})
  }
  const changeCardTitles = ( titleValue:string, list: IData, card: ICards) => {
    dispatch({type: 'CHANGE_CARD_TITLES', payload: { titleValue, list, card }})
  }
  const addComment = ( commentValue:IComment, list: IData, card: ICards) => {
    dispatch({type: 'ADD_COMMENT', payload: { commentValue, list, card }})
  }
  const removeCard = (list: IData, card: ICards) => {
    dispatch({type: 'REMOVE_CARD', payload: { list,  card }})
  }
  const removeList = ( list: IData) => {
    dispatch({type: 'REMOVE_LIST', payload: {  list }})
  }

  return (
    <DataContext.Provider value={{
      dataState,
      addLiss,
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