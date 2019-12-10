import React, {useReducer, useState} from 'react'
import reducer from './reducers'
import {addToList, removeFromList} from './actions.js'


const ShoppingList = (props) => {

    const [value, setValue] = useState('')
    const [state, dispatch] = useReducer(reducer, {shoppingList: []})

    function addToListHandler() {
        dispatch(addToList(value))
    }

    function removeFromListHandler() {
        dispatch(removeFromList(value))
    }    

    function handleText(e) {
        setValue(e.target.value)
    }

    console.log('redux state=', state)
    return(
        <div style={{margin:25}}>
            <label>Shopping list item count:</label> <span>{state.shoppingList.length}</span><br/>
            <div>
                <ul>
                    {state.shoppingList.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            <input type="text" onChange={handleText} placeholder="Enter an item"/><br/>
            <button onClick={addToListHandler}>Add to list</button>
            <button onClick={removeFromListHandler}>Remove from list</button>
        </div>
    )
}

export default ShoppingList
