import React from 'react';
import axios from 'axios';

class AsyncAxiosDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: "",
            latitude: "",
            longitude: "",
            temperature: ""
        }
    }

    componentDidMount() {
        axios("https://ipapi.co/json/")
            .then((response) => response.data)
            .then((data) => {
                const key = "Replace with your key value";
                let url = "https://api.openweathermap.org/data/2.5/weather?lat=" 
                    + data.latitude
                    + "&lon=" 
                    + data.longitude 
                    + "&APPID=" 
                    + key;
                axios(url)
                    .then((weatherData) => {
                        return weatherData.data;
                    })
                    .then((weatherData) => {
                        this.setState(
                            {ip: data.ip,
                             latitude: data.latitude,
                             longitude: data.longitude,  
                             temperature: weatherData.main.temp      
                            })                        
                    });
            });

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
                <p style={{color: "#FFAA7F"}}>
                    {(this.state.temperature - 273).toFixed(2)} &#176; C
                </p>                            
            </div>
        )
    }

}

export default AsyncAxiosDemo;