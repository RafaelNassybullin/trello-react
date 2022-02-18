export interface IMainDescProps {
}

export interface IModalPopupProps {
}

export interface IColumnListsProps {
}

export interface IYourNameInputProps {
  modalCallback: (name: string) => void
}

export interface IInputListTitleProps {
  listTitleData: IData
  listTitleClbck: (listTitleParam: IData, titleValue: string) => void
}

export interface IListsProps {
  listsDataProps: IData
  addCardClbkProps: (cardsParam: ICards, listsParam: IData) => void
}

export interface ICardsProps {
  cardsDataProps: IData
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

