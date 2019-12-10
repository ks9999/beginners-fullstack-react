import React from 'react';

class SimpleForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.onChangeHandler.bind(this);
        this.handleSubmit = this.onSubmitHandler.bind(this);          
    }

    onChangeHandler(e) {
        this.setState({value: e.target.value});
        console.log('onChangeHandler:', this.state);
    }
    
    
    onSubmitHandler(e) {
        e.preventDefault();   
        console.log('onSubmitHandler:', this.state);     
    }    
    
    render() {
        return (
        <div style={{
            margin: 50,
            padding: 40,
            width: 400,
            backgroundColor: "lightgray",
            fontWeight: "bold",
            borderRadius: 10,
            borderStyle: "solid",
            borderWidth: 1              
            }}>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Favorite movie:
                    <input type="text" name="movie" id="movie_id" onChange={this.handleChange} value={this.state.value} />
                </label>
                <input type="submit" value="Submit"   />
            </form>
        </div>

        );
    }
}

export default SimpleForm;