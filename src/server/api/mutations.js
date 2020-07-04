const { GraphQLObjectType, GraphQLInt } = require('graphql');

const WorldType = new GraphQLObjectType({
  name: 'WorldType',
  fields: {
    id: { type: GraphQLInt },
  },
});

module.exports = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    world: {
      type: WorldType,
      resolve() {
        return 'World!';
      },
    },
  },
});
