import {createContext} from "react";
import {IDataState} from "../interfaces";

export type DataContextProps = {
  dataState:IDataState
  // toggleTodo:(id:string)=>void
  //функции для мутирования стейта из контекста

}
export const DataContext = createContext<DataContextProps>({} as DataContextProps)



