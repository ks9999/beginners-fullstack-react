import React from 'react';
import _ from 'lodash';

class MyNextCar extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        };
        this.handleCarsChange = this.handleCarsChange.bind(this);
        this.handleSubmit = this.onSubmitHandler.bind(this);          
    }

    handleCarsChange(e) {
        let changed_car = e.target.value;
        let selected_cars = Array.from(this.state.cars);
        if (selected_cars.includes(changed_car)) {
            selected_cars = _.remove(selected_cars, (n) =>  n !== changed_car);
        } else {
            selected_cars.push(changed_car);
        }
        
        this.setState({cars: selected_cars});
        console.log('handleCarsChange:',  changed_car, selected_cars);
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
            backgroundColor: "#EEE",
            fontWeight: "bold",
            borderRadius: 10,
            borderStyle: "solid",
            borderWidth: 1              
            }}>
            <form onSubmit={this.handleSubmit}>
                <h2 style={{textAlign: "center"}}>My Next Car</h2>
                <label htmlFor="car_id">
                    Car
                </label>                 
                                                         
                <br/>
                <select id="car_id" multiple={true}
                    value={this.state.cars}
                    onChange={this.handleCarsChange}>
                    <option value="honda">Honda</option>
                    <option value="toyota">Toyota</option>
                    <option value="porsche">Porsche</option>
                    <option value="ford">Ford</option>
                    <option value="hyundai">Hyundai</option>    
                    <option value="gm">General Motors</option>
                    <option value="tesla">Tesla</option>
                    <option value="bmw">BMW</option>
                    <option value="volkswagon">Volkswagon</option>
                    <option value="tata">Tata Motors</option>
                    <option value="nissan">Nissan</option>
                    <option value="fiat">Fiat</option> 
                    <option value="mazda">Mazda</option>
                    <option value="chrysler">Chrysler</option>
                    <option value="saab">Saab</option>
                    <option value="mitsubishi">Mitsubishi</option>
                    <option value="chrysler">Chrysler</option>
                    <option value="subaru">Subaru</option>
                    <option value="daimler">Daimler</option>  
                    <option value="other">Other</option>  
                </select>                
                <br/><br/>          
                <input type="submit" value="Submit"   />
            </form>
        </div>

        );
    }
}

export default MyNextCar;