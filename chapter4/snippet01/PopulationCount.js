import React from 'react';

class PopulationCount extends React.Component {
    constructor(props) {
      super(props);
      const initialCount = 7609521210;  
      this.state = {
        counter: initialCount
      };
   
    }

    tick() {
      this.setState({
        counter: this.state.counter + 1
      });
    }
   
    componentDidMount() {
      setInterval(() => this.tick(), 400);
    }
   
    render() {
      var counterStyle = {
        fontSize: 50
      };
   
      var counterString = this.state.counter.toLocaleString();
   
      return (
        <h1 style={counterStyle}>{counterString}</h1>
      );
    }
  }

  export default PopulationCount;