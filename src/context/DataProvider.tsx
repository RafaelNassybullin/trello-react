import React, {useReducer} from 'react';
import {DataContext} from "./DataContext";
import {listsData} from "../store";
import {DataReducer} from "./dataReducer";
import { IDataState } from '../interfaces';

const INITIAL_STATE: IDataState = {
  datass:[...listsData]
}

interface props {children: JSX.Element | JSX.Element[]}

export const DataProvider = ({children}: props) => {

  const [dataState, dispatch] = useReducer(DataReducer, INITIAL_STATE);

  // const toggleTodo = (id: string) => {
  //   dispatch({type: 'toggleTodo', payload: id})
  // }

  return (
    <DataContext.Provider value={{
      dataState,
    }}>
      {children}
    </DataContext.Provider>
  )
}