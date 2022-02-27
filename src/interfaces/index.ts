
export interface IColumnsState {
  mainData:IColumns[]
  columns: IColumns[]
  cards:ICards[]
  comments:IComment[]
}

export interface IColumns {
  id: string
  listTitle: string
  cards: ICards[]
}

export interface ICards {
  id: string
  columnID:string
  cardTitle: string
  cardDescription: string
  cardComment: IComment[]
  modalOpen:boolean
}

export interface IComment {
  id:string
  cardID:string
  commentText:string
}