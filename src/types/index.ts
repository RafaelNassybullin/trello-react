
export interface IYourNameInputProps {
  modalCallback:(name:string)=>void
}
export interface IMainDescProps {}
export interface IModalPopupProps {}
export interface IColumnListsProps {}
export interface IInputListTitleProps {
  listTitleData:string
}


//cards
interface ICards {
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