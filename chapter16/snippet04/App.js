import React from 'react'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import CoinToss from './CoinToss'
import './App.css'

const store = createStore(rootReducer)
// store.subscribe(() => console.log('log state changes', store.getState()))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CoinToss/>
      </div>
    </Provider>
  )
}

export default App
