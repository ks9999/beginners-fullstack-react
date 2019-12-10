import React from 'react';

class Movie extends React.Component {

    render() {

        let movieStyle = {
            padding: "2rem",
            margin: "2rem",
            backgroundColor: this.props.backgroundColor,
            color: this.props.foregroundColor,
            display: "inline-block",
            border: "solid",
            borderColor: this.props.borderColor,
            borderRadius: "0.5rem"
        };

        return (
            <div style={movieStyle}>
                <label htmlFor="title">Title</label>: <span id="title">{this.props.title}</span>
                <br />
                <label htmlFor="director">Director</label>: <span id="director">{this.props.director}</span>
                <br />
                <label htmlFor="year">Year</label>: <span id="year">{this.props.year}</span>
                <br />
                <label htmlFor="rating">Rating</label>: <span id="rating">{this.props.rating}</span>
            </div>
        );

    }
}

export default Movie;
