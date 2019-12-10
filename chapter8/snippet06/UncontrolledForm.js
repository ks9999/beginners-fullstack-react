import React from 'react';

class UncontrolledForm extends React.Component {
    constructor(props) {
      super(props);
      this.input = React.createRef();
      this.handleSubmit = this.handleSubmit.bind(this);      
    }
  
    handleSubmit(e) {
      console.log('handleSubmit: this.input.current.value =', this.input.current.value);
      e.preventDefault();
    }
  
    render() {
      return (
        <div style={{
            margin: 50,
            padding: 40,
            width: 400,
            backgroundColor: "#EEE",
            borderRadius: 10,
            borderStyle: "solid",
            borderWidth: 1              
            }}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your favorite fictional character
            <input type="text" ref={this.input} />
          </label>
          <br/><br/>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
}
  
export default UncontrolledForm;