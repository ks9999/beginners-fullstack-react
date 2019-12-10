import {ADD, REMOVE} from './actiontypes.js'
const rootReducer = (state, action) => {
    if (typeof state === 'undefined') {
      return {
        shopping_list: [],
      }
    }
  
    switch (action.type) {
      case ADD:
        return {
          shopping_list: [...state.shopping_list, action.data],
        }
      case REMOVE:         
        return {
          shopping_list: state.shopping_list.filter(item => item !== action.data),
        }
      default:
        return state
    }
  }
export default rootReducer