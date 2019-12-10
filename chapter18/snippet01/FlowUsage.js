// @flow
import React from 'react';

type State = {
    count: number,
    result: number
};

function factorial(n: number): number {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

class FlowUsage extends React.Component<Props, State> {

    state = {
        count: 0,
        result: 1
    };

    componentDidMount() {
        setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: factorial(prevState.count + 1)
            }));
        }, 1000);
    }


    render() {

        let baseStyle = {
            margin: 10,
            padding: 0
        };

        let mainStyle = {
            width: 500,
            margin:15,
            textAlign: "left",
            backgroundColor: "DarkSlateBlue",
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

        };

        return (
            <div style={mainStyle}>
                <h3 style={customStyles.textLarge}>Factorial example</h3>
                <div style={customStyles.textMedium}>{this.state.count}! = {this.state.result}</div>
            </div>
        );

    }
}

export default FlowUsage;
