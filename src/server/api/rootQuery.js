const { GraphQLObjectType, GraphQLString } = require('graphql');

const HelloType = new GraphQLObjectType({
  name: 'HelloType',
  fields: {
    string: { type: GraphQLString },
  },
});

module.exports = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    hello: {
      type: HelloType,
      resolve() {
        return 'Hello!';
      },
    },
  },
});
