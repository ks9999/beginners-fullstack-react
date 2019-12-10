import React, {useState} from 'react'

const ShoppingList = (props) => {

    const [value, setValue] = useState('')
    const [shoppingList, setShoppingList] = useState([])
    
    function addToList() {
        setShoppingList([...shoppingList, value])
    }

    function removeFromList() {
        setShoppingList(shoppingList.filter( item => item !== value))
    }    

    function handleText(e) {
        setValue(e.target.value)
    }

    return(
        <div style={{margin:25}}>
            <label>Shopping list item count:</label> <span>{shoppingList.length}</span><br/>
            <div>
                <ul>
                    {shoppingList.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            <input type="text" onChange={handleText} placeholder="Enter an item"/><br/>
            <button onClick={addToList}>Add to list</button>
            <button onClick={removeFromList}>Remove from list</button>
        </div>
    )
}

export default ShoppingList
