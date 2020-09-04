const { GraphQLList } = require('graphql');
const { UserType } = require('../../types.js');
const User = require('../usersModel.js');

module.exports = {
  type: new GraphQLList(UserType),
  resolve(parents, args) {
    return User.findAll(args);
  },
};
