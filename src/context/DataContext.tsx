import {createContext} from "react";
import { ICards, IColumns, IColumnsState, IComment } from "interfaces";

export type DataContextProps = {
  dataState:IColumnsState
  pushLocalData:()=>void
  addList:(list:IColumns)=>void
  changeListTitle:( id:string, value:string )=>void
  addCards:(card:ICards, list:IColumns)=>void
  openModal:(card:ICards|undefined,list:boolean)=>void
  removeComment:(comment:IComment , list: IColumns, card:ICards)=>void
  changeDescriptions:(descriptionValue: string , list: IColumns, card: ICards)=>void
  changeCardTitles:(titleValue:string, list: IColumns, card: ICards)=>void
  addComment:(commentValue:IComment, list: IColumns, card: ICards)=>void
  removeCard:(list: IColumns, card: ICards)=>void
  removeList:(list: IColumns)=>void
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps)



