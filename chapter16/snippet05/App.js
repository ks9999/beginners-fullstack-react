import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import Feeds from './Feeds'
import LoadFeed from './LoadFeed'
import HeadlineNews from './HeadlineNews'
import './App.css'

const store = createStore(reducer, applyMiddleware(thunk, logger))

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Feeds />
        <LoadFeed />
        <HeadlineNews />
      </div>

    </Provider>    
  );
}

export default App
