import {createContext} from "react";
import {ICards, IData, IDataState, IComment} from "../interfaces";

export type DataContextProps = {
  dataState:IDataState
  addLiss:(list:IData)=>void
  changeListTitle:( id:string, value:string )=>void
  addCards:(card:ICards, list:IData)=>void
  openModal:(card:ICards,list:boolean)=>void
  removeComment:(comment:IComment , list: IData, card:ICards)=>void
  changeDescriptions:(descriptionValue: string , list: IData, card: ICards)=>void
  changeCardTitles:(titleValue:string, list: IData, card: ICards)=>void
  addComment:(commentValue:IComment, list: IData, card: ICards)=>void
  removeCard:(list: IData, card: ICards)=>void
  removeList:(list: IData)=>void
}
export const DataContext = createContext<DataContextProps>({} as DataContextProps)



