/* istanbul ignore file */

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'reactForums',
    },
    migrations: {
      directory: './src/server/data/migrations',
    },
    seeds: {
      directory: './src/server/data/seeds',
    },
  },

  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'rFTest',
    },
    migrations: {
      directory: './src/server/data/migrations',
    },
    seeds: {
      directory: './src/server/data/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};
