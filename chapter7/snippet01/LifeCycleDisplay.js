import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycleCount from './LifeCycleCount'

class LifeCycleDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        } 
        console.log("constructor: initializing state. state=", this.state, "props=", this.props);                   
    }

    UNSAFE_componentWillUpdate(newProps, newState) {
        console.log("componentWillUpdate: about to update. newProps=", newProps, "newState=", newState);
    }
     
    componentDidUpdate(currentProps, currentState) {
        console.log("componentDidUpdate: just updated. state=", this.state, "props=", this.props);
    }
     
    UNSAFE_componentWillMount() {
        console.log("componentWillMount: about to mount. state=", this.state, "props=", this.props);
    }
     
    componentDidMount() {
        console.log("componentDidMount: just mounted. state=", this.state, "props=", this.props,
            'DOM node=', ReactDOM.findDOMNode(this));
    }
     
    componentWillUnmount() {
        console.log("componentWillUnmount: about to be unmounted from the DOM. state=", 
            this.state, "props=", this.props);
    }
     
    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate: should component update? newProps=", newProps, newState, "newState=", newState);
     
        if (newState.count <= 3) {
          console.log("shouldComponentUpdate: component should update.");
          return true;
        } else {
          const mountPoint = document.getElementById('root');
          ReactDOM.unmountComponentAtNode(mountPoint);
          console.log("shouldComponentUpdate: reached threshold count. unmount component via ReactDOM.unmountComponentAtNode().");
          return false;
        }
    }
     
    UNSAFE_componentWillReceiveProps(newProps) {
        console.log("componentWillReceiveProps: component will get new props. newProps=", newProps);
    }
    

    render() {
        console.log("render: component rendered.");
        return (
            <div style={{
                margin: 50,
                height: 400,
                width: 400,
                textAlign: "center",
                backgroundColor: "DarkSlateBlue",
                padding: 40,
                fontFamily: "sans-serif",
                color: "#AAA",
                borderRadius: 20               
            }}>
                <h1>Exploring lifecycle events</h1>
                <h1>Update#:</h1>
                <LifeCycleCount count={this.state.count}/>
                <button  onClick={(e) => {
                    this.setState((prevState) => {
                        return {count: prevState.count + 1};
                    });                    

                }}  
                style={{
                    marginTop: 50,
                    fontSize: 25,
                    height: 40,
                    width:250,
                    color: "#222",   
                    borderRadius: 5             
                }}>
                    Update component
                </button>
            </div>
        );
    }
}

LifeCycleDisplay.defaultProps = {prop1 : 10};
console.log("defaultProps: default properties set.");

export default LifeCycleDisplay;