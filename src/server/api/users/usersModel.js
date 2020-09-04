const db = require('../../data/dbConfig.js');

function findAll() {
  return db('users');
}

function findBy(query) {
  return db('users').where(query).first();
}

module.exports = {
  findAll,
  findBy,
};
