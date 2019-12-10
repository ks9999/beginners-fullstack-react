import React from 'react';

class LifeCycleCount extends React.Component {
    render()
    {
        return(
            <div style={{fontSize:50}}>{this.props.count}</div>
        );
    }
}

export default LifeCycleCount;