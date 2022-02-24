export interface IDataState {
  mainData: IData[]
}
export interface ICards {
  id: string
  cardTitle: string
  cardDescription: string
  cardComment: IComment[]
  modalOpen:boolean
}

export interface IData {
  id: string
  listTitle: string
  cards: ICards[]
}

export interface IComment {
  id:string
  commentText:string
}

