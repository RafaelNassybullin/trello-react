export interface IDataState {
  datass:IData[]
}
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




