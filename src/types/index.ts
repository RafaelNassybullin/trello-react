export interface IMainDescProps {}
export interface IModalPopupProps {}
export interface IColumnListsProps {}

export interface IYourNameInputProps {
  modalCallback:(name:string)=>void
}
export interface IInputListTitleProps {
  listTitleData:IData
  clbkTest:(h:IData, titleValue:string)=>void
}
//list & cards
export interface ICards {
  id: string
  cardTitle: string
  cardDescription: string
  cardComment: string
}
export interface IData {
  id: string
  listTitle: string
  cards: ICards[]
}
