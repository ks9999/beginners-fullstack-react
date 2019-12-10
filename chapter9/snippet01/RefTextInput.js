import React from 'react';
import './RefTextInput.css';
class RefTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.textField = React.createRef();
      this.buttonHandle = this.buttonHandle.bind(this);
    }
  
    buttonHandle() {
      this.textField.current.focus();
    }
  
    render() {
      return (
        <div className="RefApp">
          <button
            onClick={this.buttonHandle}>Text Field Focus Demo</button>
          <input
            type="text"
            placeholder="text value"
            ref={this.textField} />


        </div>
      );
    }
  }

  export default RefTextInput;