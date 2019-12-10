import React from 'react';

class BankAccount extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const balanceString = this.props.balance.toLocaleString();
        return (
            <div style={{
                fontSize: 50
                }}>
                ${balanceString}
            </div>
        )
    }
}

export default BankAccount;