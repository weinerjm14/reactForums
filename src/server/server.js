const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./api/schema.js');

const server = express();
const dev = process.env.NODE_ENV === 'development';

server.use('/api/graphql', expressGraphQL({
  schema,
  graphiql: dev,
}));

module.exports = server;
