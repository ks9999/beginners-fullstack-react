import React from 'react'
import {connect} from 'react-redux'

class ShoppingList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.addToList = this.addToList.bind(this)
        this.removeFromList = this.removeFromList.bind(this)        
        this.handleText = this.handleText.bind(this)
    }
    
    addToList() {
        const item = this.state.value
        this.props.addToList(item)

    }

    removeFromList() {
        const item = this.state.value
        this.props.removeFromList(item)
    }    

    handleText(e) {
        this.setState({value: e.target.value})
    }

    render() {
        const {
            shop_list = [],
        } = this.props

        return(
            <div style={{margin:25}}>
                <label>Shopping list item count:</label> <span>{shop_list.length}</span><br/>
                <div>
                    <ul>
                        {shop_list.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <input type="text" onChange={this.handleText} placeholder="Enter an item"/><br/>
                <button onClick={this.addToList}>Add to list</button>
                <button onClick={this.removeFromList}>Remove from list</button>
            </div>
        )

    }

}

export default connect(
    // mapStateToProps 1st parameter
    state => (
                {
                    shop_list: state.shopping_list
                }
            ),
    // mapDispatchToProps 2nd parameter
    (dispatch, item) => {
        return {
            addToList: (item) => dispatch({type: 'ADD', data: item}),
            removeFromList: (item) => dispatch({type: 'REMOVE', data: item})
        }
    }
    )(ShoppingList)
