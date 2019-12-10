const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = gql`
    type Star {
        name: String
    }

    type Movie {
        title: String
        year: Int  
        rating: Float  
        duration: Int 
        category: String 
        director: String 
        votes: Int 
        gross: Float                                       
        cover: String
        stars: [Star]
    }

    type Query {
        movies: [Movie],
        movie(id: ID): Movie
    }
`;


const movies = require('./top10.json');


const resolvers = {
    Query: {
      movies: () => movies,
      movie: (_, { id }) => movies[id - 1]
    },
  };

  module.exports = {typeDefs, resolvers};
