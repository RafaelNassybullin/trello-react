export interface IDataState {
  datass: IData[]
}

export interface ICards {
  id: string
  cardTitle: string
  cardDescription: string
  cardComment: string[]
  modalOpen:boolean
}

export interface IData {
  id: string
  listTitle: string
  cards: ICards[]
}




