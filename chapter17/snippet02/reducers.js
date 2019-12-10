import {ADD, REMOVE} from './actiontypes.js'

const rootReducer = (state, action) => {
    if (typeof state === 'undefined') {
      return {
        shoppingList: [],
      }
    }
  
    switch (action.type) {
      case ADD:
        return {
          shoppingList: [...state.shoppingList, action.data],
        }
      case REMOVE:         
        return {
          shoppingList: state.shoppingList.filter(item => item !== action.data),
        }
      default:
        return state
    }
  }
export default rootReducer