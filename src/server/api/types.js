const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

// Types
const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
  }),
});

module.exports = {
  UserType,
};
