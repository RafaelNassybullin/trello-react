import {ICards, IColumns, IColumnsState, IComment} from "interfaces";

type DataAction =
  | { type: 'ADD_NEW_LIST', payload: IColumns }
  | { type: 'CHANGE_LIST_TITLE', payload: { id: string, value: string } }
  | { type: 'ADD_CARD', payload: { card: ICards, list: IColumns } }
  | { type: 'OPEN_MODAL', payload: { cardID: string } }
  | { type: 'CLOSE_MODAL' }
  | { type: 'REMOVE_COMMENT', payload: { comment: IComment } }
  | { type: 'CHANGE_DESCRIPTIONS', payload: { descriptionValue: string, card: ICards } }
  | { type: 'CHANGE_CARD_TITLES', payload: { titleValue: string, card: ICards } }
  | { type: 'ADD_COMMENT', payload: { commentValue: IComment } }
  | { type: 'REMOVE_CARD', payload: { card: ICards } }
  | { type: 'REMOVE_LIST', payload: { list: IColumns } }

export const DataReducer = (state: IColumnsState, action: DataAction): IColumnsState => {
  switch (action.type) {

    case 'ADD_NEW_LIST':
      return {...state, columns: [...state.columns, action.payload]}

    case 'CHANGE_LIST_TITLE':
      return {
        ...state, columns:
          state.columns.map(({...el}) => {
            if (el.id === action.payload.id && action.payload.value !== '') {
              el.listTitle = action.payload.value
            }
            return el
          })
      }

    case 'ADD_CARD':
      return {
        ...state, cards: [...state.cards, action.payload.card]
      }
    case 'OPEN_MODAL':
      return {
        ...state, modalCardID: action.payload.cardID
      }
    case 'CLOSE_MODAL':
      return {
        ...state, modalCardID: ''
      }
    case 'REMOVE_COMMENT':
      return {
        ...state, comments: state.comments.filter(co => co.id !== action.payload.comment.id)
      }
    case 'CHANGE_DESCRIPTIONS':
      return {
        ...state, cards: state.cards.map(el => {
          if (el.id === action.payload.card.id) {
            el.cardDescription = action.payload.descriptionValue
          }
          return el
        })
      }
    case 'CHANGE_CARD_TITLES':
      return {
        ...state, cards: state.cards.map(el => {
          if (el.id === action.payload.card.id) {
            el.cardTitle = action.payload.titleValue
          }
          return el
        })
      }
    case 'ADD_COMMENT':
      return {
        ...state, comments: [...state.comments, action.payload.commentValue]

      }
    case 'REMOVE_CARD':
      return {...state, cards: state.cards.filter(el => el.id !== action.payload.card.id)}
    case 'REMOVE_LIST':
      return {
        ...state, columns: [
          ...state.columns
            .filter(el => el.id !== action.payload.list.id)
        ]
      }
    default:
      return state
  }
}
