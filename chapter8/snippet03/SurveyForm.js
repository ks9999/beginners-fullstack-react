import React from 'react';

class SurveyForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            movie: '',
            reason: '',
            gender: {
                male: true,
                female: false,
            },
            likes: {
                comedy: false,
                action: false,
                drama: false,
                romance: false,
                other: false
            }
        };
        this.handleMovieChange = this.handleMovieChange.bind(this);
        this.handleReasonChange = this.handleReasonChange.bind(this);    
        this.handleGenderChange = this.handleGenderChange.bind(this);    
        this.handleLikesChange = this.handleLikesChange.bind(this);   

        this.handleSubmit = this.onSubmitHandler.bind(this);          
    }

    handleMovieChange(e) {
        this.setState({movie: e.target.value});
        console.log('handleMovieChange:', this.state);
    }
    
    handleReasonChange(e) {
        this.setState({reason: e.target.value});
        console.log('handleReasonChange:', this.state);
    }    

    handleGenderChange(e) {
        let gender_change = {'male': false, 'female': false};
        let key = e.target.value;
        gender_change[key] = e.target.checked;    
        console.log('handleGenderChange: gender_change', gender_change);        
        this.setState({gender: gender_change});     
    }    
    
    handleLikesChange(e) {
        let likes_change = JSON.parse(JSON.stringify(this.state.likes));
        let key = e.target.value;
        likes_change[key] = e.target.checked;    
        console.log('handleLikesChange: likes_change', likes_change);        
        this.setState({likes: likes_change});     
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
                <h2 style={{textAlign: "center"}}>Movies Survey</h2>
                <label>
                    Favorite movie
                </label>  
                <br />                  
                <input type="text" name="movie" id="movie_id" onChange={this.handleMovieChange} value={this.state.movie} />

                <br /><br/>
                <label>
                    Reason
                </label>
                <br />
                <textarea name="reason" rows="5" onChange={this.handleReasonChange} value={this.state.reason} />      
                <br /><br />                 
                <label>
                    Your gender
                </label>
                <br />
                <input type="radio" name="gender" value="male" id="male_id" onChange={this.handleGenderChange} checked={this.state.gender.male}></input>
                <label htmlFor="male_id">Male</label>
                <input type="radio" name="gender" value="female" id="female_id" onChange={this.handleGenderChange}  checked={this.state.gender.female}></input>               
                <label htmlFor="female_id">Female</label>            
                <br /><br/>     
                <label>
                    Likes
                </label>
                <br />
                <input type="checkbox" name="likes" value="comedy" id="comedy_id" onChange={this.handleLikesChange}></input>
                <label htmlFor="comedy_id">Comedy</label><br/>
                <input type="checkbox" name="likes" value="action" id="action_id" onChange={this.handleLikesChange}></input>
                <label htmlFor="action_id">Action</label><br/>   
                <input type="checkbox" name="likes" value="drama" id="drama_id" onChange={this.handleLikesChange}></input>
                <label htmlFor="drama_id">Drama</label><br/>     
                <input type="checkbox" name="likes" value="romance" id="romance_id" onChange={this.handleLikesChange}></input>
                <label htmlFor="romance_id">Romance</label><br/>   
                <input type="checkbox" name="likes" value="other" id="other_id" onChange={this.handleLikesChange}></input>
                <label htmlFor="other_id">Other</label><br/>                                                          
                <br/><br/>
                           
                <input type="submit" value="Submit"   />
            </form>
        </div>

        );
    }
}

export default SurveyForm;