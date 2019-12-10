import React from 'react'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import ShoppingList from './ShoppingList'
import './App.css'

const rootReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return {
      shopping_list: [],
    }
  }

  switch (action.type) {
    case 'ADD':
      return {
        shopping_list: [...state.shopping_list, action.data],
      }
    case 'REMOVE':         
      return {
        shopping_list: state.shopping_list.filter(item => item !== action.data),
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)
store.subscribe(() => console.log('log state changes', store.getState()))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
