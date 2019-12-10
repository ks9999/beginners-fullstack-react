import React from 'react';
import PopulationCount from './PopulationCount.js'

class WorldPopulation extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {

          let baseStyle = {
            margin: 10,
            padding: 0
          };
       
          let populationStyle = {
            margin: 10,
            width: 370,
            textAlign: "center",
            backgroundColor: "#052C60",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#AAA",
            borderRadius: 15
          };
       
          let customStyles = {
            textLarge: {
              fontSize: 30,
              ...baseStyle
            },
            textMedium: {
              ...baseStyle
            },
            textVerySmall: {
              fontSize: 17,
              opacity: 0.5,
              ...baseStyle
            }
          };          

        return (
            <div style={populationStyle}>
                <h1 style={customStyles.textLarge}>World</h1>                
                <h2 style={customStyles.textMedium}>Population</h2>
                <PopulationCount initialCount={this.props.initialCount} />
                <p style={customStyles.textVerySmall}>Population growth 5 persons every 2 seconds.</p>  
                <p style={customStyles.textVerySmall}>Reference: US Census Bureau.</p>                
            </div>
        );

    }
}

export default WorldPopulation;

