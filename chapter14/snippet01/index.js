const { ApolloServer, gql } = require('apollo-server');
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

const server = new ApolloServer({ typeDefs, resolvers });

const {
    PORT = 4500,
  } = process.env;

server.listen({port: PORT}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});