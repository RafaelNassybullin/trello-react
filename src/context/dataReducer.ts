import {ICards, IData, IDataState} from "../interfaces";


type DataAction =
  | { type: 'ADD_NEW_LIST', payload: IData }
  | { type: 'CHANGE_LIST_TITLE', payload: { id: string, value: string } }
  | { type: 'ADD_CARD', payload: { card: ICards, list: IData } }
  | { type: 'OPEN_MODAL', payload: { card: ICards, list: boolean } }

export const DataReducer = (state: IDataState, action: DataAction): IDataState => {

  switch (action.type) {
    case 'ADD_NEW_LIST':
      return {...state, datass: [...state.datass, action.payload]}
    case 'CHANGE_LIST_TITLE':
      return {
        ...state, datass:
          state.datass.map(({...el}) => {
            if (el.id === action.payload.id && action.payload.value !== '') {
              el.listTitle = action.payload.value
            }
            return el
          })
      }
    case 'ADD_CARD':
      return {
        ...state, datass:
          state.datass.map(({...el}) => {
            if (el.id === action.payload.list.id) {
              el.cards.push(action.payload.card)
            }
            return el
          })
      }
    case 'OPEN_MODAL':
      return {
        ...state, datass:
          state.datass.map((el) => {
            el.cards.map(el=>el.id === action.payload.card.id ? el.modalOpen = action.payload.list : null)
            return el
          })
      }
    default:
      return state
  }
}
