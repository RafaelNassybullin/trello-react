import React, {useReducer} from 'react';
import {DataContext} from "./DataContext";
import {listsData} from "../store";
import {DataReducer} from "./dataReducer";
import {ICards, IData, IDataState} from '../interfaces';

const INITIAL_STATE: IDataState = {
  datass:[...listsData]
}

interface props {children: JSX.Element | JSX.Element[]}

export const DataProvider = ({children}: props) => {

  const [dataState, dispatch] = useReducer(DataReducer, INITIAL_STATE);

  const addLiss = (newList: IData) => {
    dispatch({type: 'ADD_NEW_LIST', payload: newList})
  }

  const changeListTitle = ( id:string, value:string ) => {
    dispatch({type: 'CHANGE_LIST_TITLE', payload: {id, value}  } )
  }

  const addCards = (card:ICards, list:IData ) => {
    dispatch({type: 'ADD_CARD', payload: {card, list}})
  }


  return (
    <DataContext.Provider value={{
      dataState,
      addLiss,
      changeListTitle,
      addCards
    }}>
      {children}
    </DataContext.Provider>
  )
}