import { SELECT_FEED, REQUEST_NEWS, RECEIVE_NEWS } from './actiontypes'

const API_KEY = 'c39a26d9c12f48dba2a5c00e35684ecc'

export const selectFeed = feed => ({
  type: SELECT_FEED,
  feed
})

export const requestNews = () => ({
  type: REQUEST_NEWS
})

export const receivedNews = json => ({
  type: RECEIVE_NEWS,
  json: json.articles
})

export function fetchNews(feed) {
  return (dispatch) => {
    dispatch(requestNews());
    return fetch(`https://newsapi.org/v1/articles?source=${feed}&apiKey=${API_KEY}`)
      .then(
      response => response.json(),
      error => console.log('Error', error)
    )
      .then((json) => {
        dispatch(receivedNews(json))
      },
    )
  }
}
