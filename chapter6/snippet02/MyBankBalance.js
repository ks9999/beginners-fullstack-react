import React from 'react';
import BankAccount from './BankAccount'

class MyBankBalance extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            balance: parseInt(this.props.startingBalance)
        }    
        this.deposit = this.makeDeposit.bind(this);    
    }

    makeDeposit(e) {
        this.setState((prevState) => {
                return {balance: prevState.balance + 500};
        });
    }

    render() {
        return (
            <div style={{
                margin: 100,
                height: 400,
                width: 400,
                textAlign: "center",
                backgroundColor: "darkgreen",
                padding: 40,
                fontFamily: "sans-serif",
                color: "#AAA",
                borderRadius: 10               
            }}>
                <h1>My Bank Balance</h1>
                <BankAccount balance={this.state.balance}/>
                <button  onClick={this.deposit}  style={{
                    margin: 100,
                    fontSize: 25,
                    height: 40,
                    color: "#222",   
                    borderRadius: 5             
                }}>
                    Deposit
                </button>
            </div>
        );
    }
}

export default MyBankBalance;