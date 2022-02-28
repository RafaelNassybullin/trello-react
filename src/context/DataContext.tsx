import {createContext} from "react";
import { ICards, IColumns, IColumnsState, IComment } from "interfaces";

export type DataContextProps = {
  dataState:IColumnsState
  addList:(list:IColumns)=>void
  changeListTitle:( id:string, value:string )=>void
  addCards:(card:ICards, list:IColumns)=>void
  openModal:(cardID:string)=>void
  closeModal:()=>void
  removeComment:(comment:IComment , list: IColumns, card:ICards)=>void
  changeDescriptions:(descriptionValue: string ,  card: ICards)=>void
  changeCardTitles:(titleValue:string, card: ICards)=>void
  addComment:(commentValue:IComment, list: IColumns, card: ICards)=>void
  removeCard:( card: ICards )=>void
  removeList:(list: IColumns)=>void
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps)



