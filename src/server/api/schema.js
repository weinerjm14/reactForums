const { GraphQLSchema } = require('graphql');
const Mutations = require('./mutations.js');
const RootQuery = require('./rootQuery.js');

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});

module.exports = schema;
