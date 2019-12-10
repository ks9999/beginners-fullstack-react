const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const path = require('path');

// Set PORT and PWD values.
const {
  PORT = 4000,
  PWD = __dirname
} = process.env;

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));

// GraphQL route
app.use('/graphql', graphqlHTTP(req => ({
  schema: schema,
  context: req.session
})));

app.use('/pubdist', express.static(path.resolve(PWD, 'build', 'public')));

// Default route
app.use('*', (req, res) => {
  res.sendFile('index.html', {
    root: PWD
  })
});

app.listen(PORT, () => console.log(`GraphQL service on http://localhost:${PORT}/graphql`));
