const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt    
  } = require('graphql')

  const movies = require('./top10.json')
  
  const movie = new GraphQLObjectType({
    name: 'Movie',
    fields: {
      title: {type: GraphQLString},
      year: {type: GraphQLInt},  
      rating: {type: GraphQLFloat},  
      duration: {type: GraphQLInt}, 
      category: {type: GraphQLString},  
      director: {type: GraphQLString}, 
      votes: {type: GraphQLInt}, 
      gross: {type: GraphQLFloat},                                       
      cover: {type: GraphQLString},
      stars: {
        type: new GraphQLList(new GraphQLObjectType({
          name: 'stars',
          fields: {
            name: {type: GraphQLString}
          }
        }))
      }
    }
  })
  
  module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        movies: {
          type: new GraphQLList(movie),
          resolve: () => movies
        },
        movie: {
          type: movie,
          args: {
            index: {type: GraphQLInt}
          },
          resolve: (r, {index}) => movies[index - 1]
        }
      }
    })
  })
  