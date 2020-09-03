const { GraphQLObjectType } = require('graphql');
const user = require('./users/queries/userQuery.js');
const users = require('./users/queries/allUsersQuery.js');

module.exports = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    user,
    users,
  },
});
