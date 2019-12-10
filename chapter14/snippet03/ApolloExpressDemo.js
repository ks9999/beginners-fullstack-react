import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class ApolloExpressDemo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            movies: []
        }

        this.graphqlServer = 'http://localhost:4600';
    }

    componentDidMount() {
        const asyncWrapper = async() => {
            const url = this.graphqlServer + '/graphql?query={movies{title,rating,year,director,votes,cover}}';
            const response = await axios(url);
            const respData = response.data;
            const movies = respData.data.movies;       
            this.setState(
                {
                    movies: movies     
                });         
        };
        asyncWrapper();
    }

    render() {
        return (
        <div>
            {this.state.movies.map((movie, index) => {
                return <div style={{
                            display: "inline",
                            fontSize: "10px",
                            fontWeight: "bold",
                            margin: 5
                        }} 
                        key={index}>
                            <div style={{
                                display: "inline-grid",                            
                                }}>
                                <Link to={`/movies/${index + 1}`}>
                                    <img src={`${this.graphqlServer}${movie.cover}`} alt={movie.title} />
                                </Link> 
                                <span>Director: {movie.director}</span>
                                <span>Votes: {movie.votes}</span>                             
                                <span>Rating: {movie.rating}</span>
                                <span>Year: {movie.year}</span>                                
                            </div>   
                        </div>        
            })
            }
        </div>
        );
    }
}

export default ApolloExpressDemo; 
