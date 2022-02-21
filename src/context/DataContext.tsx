import {createContext} from "react";
import {ICards, IData, IDataState} from "../interfaces";

export type DataContextProps = {
  dataState:IDataState
  addLiss:(list:IData)=>void
  changeListTitle:( id:string, value:string )=>void
  addCards:(card:ICards, list:IData)=>void
  openModal:(card:ICards,list:boolean)=>void
}
export const DataContext = createContext<DataContextProps>({} as DataContextProps)



