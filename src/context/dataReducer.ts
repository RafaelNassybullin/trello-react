import {ICards, IData, IDataState, IComment} from "../interfaces";

type DataAction =
  | { type: 'ADD_NEW_LIST', payload: IData }
  | { type: 'CHANGE_LIST_TITLE', payload: { id: string, value: string } }
  | { type: 'ADD_CARD', payload: { card: ICards, list: IData } }
  | { type: 'OPEN_MODAL', payload: { card: ICards | undefined, list: boolean } }
  | { type: 'REMOVE_COMMENT', payload: { comment: IComment, list: IData, card: ICards, } }
  | { type: 'CHANGE_DESCRIPTIONS', payload: { descriptionValue: string, list: IData, card: ICards } }
  | { type: 'CHANGE_CARD_TITLES', payload: { titleValue: string, list: IData, card: ICards } }
  | { type: 'ADD_COMMENT', payload: { commentValue: IComment, list: IData, card: ICards } }
  | { type: 'REMOVE_CARD', payload: {list: IData, card: ICards } }
  | { type: 'REMOVE_LIST', payload: { list: IData } }

export const DataReducer = (state: IDataState, action: DataAction): IDataState => {

  switch (action.type) {

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
          state.mainData.map((el:IData) => {
            el.cards.map(el => el.id === action.payload.card?.id ? el.modalOpen = action.payload.list : null)
            return el
          })
      }
    case 'REMOVE_COMMENT':
      return {
        ...state,
        mainData: state.mainData.map((el:IData) => ({
          ...el,
          cards: el.cards.map((el:ICards) => ({
            ...el,
            cardComment: el.cardComment.filter((el:IComment) => {
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
              el.cards.map((el:ICards) => {
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
        ...state, mainData: state.mainData.map((el)=>({
          ...el,
          cards: el.cards.filter((el)=>{
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
