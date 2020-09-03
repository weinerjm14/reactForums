/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments();
    tbl.string('username', 30).notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
