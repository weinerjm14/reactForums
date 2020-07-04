const { GraphQLObjectType, GraphQLInt } = require('graphql');

const HelloType = new GraphQLObjectType({
  name: 'HelloType',
  fields: {
    id: { type: GraphQLInt },
  },
});

module.exports = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    world: {
      type: HelloType,
      resolve() {
        return 'Hello!';
      },
    },
  },
});
