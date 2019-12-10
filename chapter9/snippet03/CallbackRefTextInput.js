import React from 'react';
import './RefTextInput.css';
class CallbackRefTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textField = null;
    }

    render() {
        return (
            <div className="RefApp">
                <button
                    onClick={() => {
                        this.textField.focus();
                    }}>
                    Callback Ref Text Field Focus Demo</button>
                <input
                    type="text"
                    placeholder="text value"
                    ref={(element) => {
                        this.textField = element;
                    }} />
            </div>
        );
    }
}

export default CallbackRefTextInput;
