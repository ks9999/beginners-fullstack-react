import React from 'react';

var xhr;

class AsyncXmlHttpRequestDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: ""
        };
    }
    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipapi.co/json/", true);

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var data = xhr.responseText;
                    var json = JSON.parse(data);  
                    this.setState(
                        {
                            ip: json.ip            
                        });                                    
                }
            }

        };
        xhr.send();
    }

    render () {
        return (
            <div style={{fontSize: "30px"}}>
                <h2 style={{color: "#CDE"}}>IP address using XmlHttpRequest</h2>
                <p style={{color: "#9ABC00"}}>
                    {this.state.ip}
                </p>
            </div>
        )
    }
}

export default AsyncXmlHttpRequestDemo;