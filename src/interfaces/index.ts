
export interface IColumnsState {
  columns:IColumns[]
  cards:ICards[]
  comments:IComment[]
  modalCardID:string
}

export interface IColumns {
  id: string
  listTitle: string
}

export interface ICards {
  id: string
  columnID:string
  cardTitle: string
  cardDescription: string
}

export interface IComment {
  id:string
  cardID:string
  commentText:string
}