import {IData, IDataState} from "../interfaces";


type DataAction =
  | { type: 'addTodo', payload: IData }
  | { type: 'toggleTodo', payload: string  }

export const DataReducer = (state: IDataState, action: DataAction):IDataState => {

  switch (action.type) {
    case 'addTodo':
      return {...state, datass: [...state.datass, action.payload]}

    default:
      return state
  }
}