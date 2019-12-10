import React from 'react';

class AsyncFetchDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: "",
            latitude: "",
            longitude: ""
        }
    }

    componentDidMount() {
        fetch("https://ipapi.co/json/")
            .then((response) => response.json())
            .then((json) => this.setState(
                {ip: json.ip,
                 latitude: json.latitude,
                 longitude: json.longitude,              
                }));
    }

    render () {
        return (
            <div style={{
                fontSize: "50px",
            }}>
                <h2 style={{color: "#CDE"}}>My Location</h2>
                <p style={{color: "#9ABC00"}}>
                    {this.state.ip}
                </p>
                <p style={{color: "#9AFCFF"}}>
                    ({this.state.latitude}, {this.state.longitude})
                </p>              
            </div>
        )
    }

}

export default AsyncFetchDemo;