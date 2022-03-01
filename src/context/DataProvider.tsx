import React, {useEffect, useReducer} from 'react';
import {DataContext} from "./DataContext";
import {cards, columns, comments} from "store";
import {DataReducer} from "./dataReducer";
import {ICards, IColumns, IColumnsState, IComment} from 'interfaces';

const INITIAL_STATE: IColumnsState = {
  columns: [...columns],
  cards: [...cards],
  comments: [...comments],
  modalCardID: ''
}

interface props {
  children: JSX.Element | JSX.Element[]
}

export const DataProvider = ({children}: props) => {

  const [dataState, dispatch] = useReducer(DataReducer, INITIAL_STATE, () => {
    const localData = localStorage.getItem('localData');
    return localData ? JSON.parse(localData) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem('localData', JSON.stringify(dataState))
  }, [dataState])

  const addList = (newList: IColumns) => {
    dispatch({type: 'ADD_NEW_LIST', payload: newList})
  }

  const changeListTitle = (id: string, value: string) => {
    dispatch({type: 'CHANGE_LIST_TITLE', payload: {id, value}})
  }

  const addCards = (card: ICards) => {
    dispatch({type: 'ADD_CARD', payload: {card}})
  }

  const openModal = (cardID: string) => {
    dispatch({type: 'OPEN_MODAL', payload: {cardID}})
  }

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }

  const removeComment = (comment: IComment) => {
    dispatch({type: 'REMOVE_COMMENT', payload: {comment}})
  }

  const changeDescriptions = (descriptionValue: string, card: ICards) => {
    dispatch({type: 'CHANGE_DESCRIPTIONS', payload: {descriptionValue, card}})
  }

  const changeCardTitles = (titleValue: string, card: ICards) => {
    dispatch({type: 'CHANGE_CARD_TITLES', payload: {titleValue, card}})
  }

  const addComment = (commentValue: IComment) => {
    dispatch({type: 'ADD_COMMENT', payload: {commentValue}})
  }

  const removeCard = (card: ICards) => {
    dispatch({type: 'REMOVE_CARD', payload: {card}})
  }

  const removeList = (list: IColumns) => {
    dispatch({type: 'REMOVE_LIST', payload: {list}})
  }

  return (
    <DataContext.Provider value={{
      dataState,
      addList,
      changeListTitle,
      addCards,
      openModal,
      closeModal,
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