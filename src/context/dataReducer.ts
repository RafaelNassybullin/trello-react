import {ICards, IColumns, IColumnsState, IComment} from "interfaces";

type DataAction =
  | { type: 'PUSH_LOCAL_DATA'}
  | { type: 'ADD_NEW_LIST', payload: IColumns }
  | { type: 'CHANGE_LIST_TITLE', payload: { id: string, value: string } }
  | { type: 'ADD_CARD', payload: { card: ICards, list: IColumns } }
  | { type: 'OPEN_MODAL', payload: { card: ICards | undefined , list: boolean } }
  | { type: 'REMOVE_COMMENT', payload: { comment: IComment, list: IColumns, card: ICards, } }
  | { type: 'CHANGE_DESCRIPTIONS', payload: { descriptionValue: string, list: IColumns, card: ICards } }
  | { type: 'CHANGE_CARD_TITLES', payload: { titleValue: string, list: IColumns, card: ICards } }
  | { type: 'ADD_COMMENT', payload: { commentValue: IComment, list: IColumns, card: ICards } }
  | { type: 'REMOVE_CARD', payload: { list: IColumns, card: ICards } }
  | { type: 'REMOVE_LIST', payload: { list: IColumns } }

export const DataReducer = ( state: IColumnsState, action: DataAction ): IColumnsState => {
  switch (action.type) {
    case 'PUSH_LOCAL_DATA':
      state.columns.map((el:IColumns) => {
        const filteredCards = state.cards.filter((fil:ICards) => fil.columnID === el.id)
        return el.cards.push(...filteredCards)
      })
      state.columns.map(el => el.cards.map((el:ICards) => {
        const filteredComments = state.comments.filter((fil:IComment) => fil.cardID === el.id)
        return el.cardComment.push(...filteredComments)
      }))
      return {
        ...state,
        mainData: state.columns
      }
    case 'ADD_NEW_LIST':
      return {...state, mainData: [...state.mainData, action.payload]}
    case 'CHANGE_LIST_TITLE':
      return {
        ...state, mainData:
          state.mainData.map(({...el}) => {
            if (el.id === action.payload.id && action.payload.value !== '') {
              el.listTitle = action.payload.value
            }
            return el
          })
      }
    case 'ADD_CARD':
      return {
        ...state, mainData:
          state.mainData.map(({...el}) => {
            if (el.id === action.payload.list.id) {
              el.cards.push(action.payload.card)
            }
            return el
          })
      }
    case 'OPEN_MODAL':
      return {
        ...state, mainData:
          state.mainData.map((el: IColumns) => {
            el.cards.map(el => el.id === action.payload.card?.id ? el.modalOpen = action.payload.list : null)
            return el
          })
      }
    case 'REMOVE_COMMENT':
      return {
        ...state,
        mainData: state.mainData.map((el: IColumns) => ({
          ...el,
          cards: el.cards.map((el: ICards) => ({
            ...el,
            cardComment: el.cardComment.filter((el: IComment) => {
                return el.id !== action.payload.comment.id
              }
            )
          }))
        }))
      }
    case 'CHANGE_DESCRIPTIONS':
      return {
        ...state, mainData:
          state.mainData.map(({...el}) => {
            if (el.id === action.payload.list.id) {
              el.cards.map((el: ICards) => {
                  if (el.id === action.payload.card.id)
                    el.cardDescription = action.payload.descriptionValue
                }
              )
            }
            return el
          })
      }
    case 'CHANGE_CARD_TITLES':
      return {
        ...state, mainData:
          state.mainData.map(({...el}) => {
            if (el.id === action.payload.list.id) {
              el.cards.map((el) => {
                  if (el.id === action.payload.card.id)
                    el.cardTitle = action.payload.titleValue
                }
              )
            }
            return el
          })
      }
    case 'ADD_COMMENT':
      return {
        ...state, mainData:
          state.mainData.map(({...el}) => {
            if (el.id === action.payload.list.id) {
              el.cards.map((el) => {
                  if (el.id === action.payload.card.id)
                    el.cardComment.unshift(action.payload.commentValue)
                }
              )
            }
            return el
          })
      }
    case 'REMOVE_CARD':
      return {
        ...state, mainData: state.mainData.map((el) => ({
          ...el,
          cards: el.cards.filter((el) => {
            return el.id !== action.payload.card.id
          })
        }))
      }
    case 'REMOVE_LIST':
      return {
        ...state, mainData: [
          ...state.mainData
            .filter(el => el.id !== action.payload.list.id)
        ]
      }
    default:
      return state
  }
}
