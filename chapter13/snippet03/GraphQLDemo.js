import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class GraphQLDemo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            movies: []
        }

        this.graphqlServer = 'http://localhost:4000';
    }

    componentDidMount() {
        const asyncWrapper = async() => {
            const url = this.graphqlServer + '/graphql?query={movies{title,rating,year,cover}}';
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
                            fontWeight: "bold",
                            margin: 5
                        }} 
                        key={index}>
                            <div style={{
                                display:"inline-grid",                            
                                }}>
                                <Link to={`/movies/${index + 1}`}>
                                    <img src={`${this.graphqlServer}${movie.cover}`} alt={movie.title} />
                                </Link>                              
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

export default GraphQLDemo; 

