const { ApolloServer} = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');

const express = require('express');
const cors = require('cors');
const path = require('path');

// Set PORT and PWD values.
const {
  PORT = 4600,
  PWD = __dirname
} = process.env;

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
server.applyMiddleware({ app });

app.use(cors({
  origin: 'http://localhost:3000'
}));


app.use('/pubdist', express.static(path.resolve(PWD, 'build', 'public')));

// Default route
app.use('*', (req, res) => {
  res.sendFile('index.html', {
    root: PWD
  })
});

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)