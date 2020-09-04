const { GraphQLID, GraphQLString } = require('graphql');
const { UserType } = require('../../types.js');
const User = require('../usersModel.js');

module.exports = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
    username: { type: GraphQLString },
  },
  resolve(parents, args) {
    return User.findBy(args);
  },
};
