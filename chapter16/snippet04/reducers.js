import {TOSSCOIN} from './actiontypes.js'
const rootReducer = (state, action) => {
    if (typeof state === 'undefined') {
      return {
        hits: 0,
        total: 0,

      }
    }
  
    switch (action.type) {
      case TOSSCOIN:
        return {
          hits: state.hits + action.data.hit,
          total: state.total + 1
        }
      default:
        return state
    }
  }
export default rootReducer