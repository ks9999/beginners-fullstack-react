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
        const asyncWrapper = async() => {
            const response = await axios("https://ipapi.co/json/");
            const geoData = await response.data;
            const key = "Replace with your key.";
            let url = "https://api.openweathermap.org/data/2.5/weather?lat=" 
                + geoData.latitude
                + "&lon=" 
                + geoData.longitude 
                + "&APPID=" 
                + key;
            const weatherResponse = await axios(url);
            const weatherData = await weatherResponse.data;
            this.setState(
                {
                    ip: geoData.ip,
                    latitude: geoData.latitude,
                    longitude: geoData.longitude,  
                    temperature: weatherData.main.temp      
                });         
        };
        asyncWrapper();
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
