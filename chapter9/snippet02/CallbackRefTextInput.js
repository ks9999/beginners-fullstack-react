import React from 'react';
import './RefTextInput.css';
class CallbackRefTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textField = null;
        this.refCallback =  (element) => {
            this.textField = element;
        };
        this.buttonHandle = this.buttonHandle.bind(this);
    }

    buttonHandle() {
        this.textField.focus();
    }

    render() {
        return (
            <div className="RefApp">
                <button
                    onClick={this.buttonHandle}>Callback Ref Text Field Focus Demo</button>
                <input
                    type="text"
                    placeholder="text value"
                    ref={this.refCallback} />
            </div>
        );
    }
}

export default CallbackRefTextInput;
