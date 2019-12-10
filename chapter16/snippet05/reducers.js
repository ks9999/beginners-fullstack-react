import { SELECT_FEED, REQUEST_NEWS, RECEIVE_NEWS } from './actiontypes'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_FEED:
      return { ...state, feed: action.feed }
    case REQUEST_NEWS:
      return { ...state, loading: true }
    case RECEIVE_NEWS:
      return { ...state, json: action.json, loading: false }
    default:
      return state
  }
}

export default reducer