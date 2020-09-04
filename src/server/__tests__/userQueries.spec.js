const supertest = require('supertest');
const server = require('../server.js');
const knex = require('../data/dbConfig.js');

const request = supertest(server);

describe('Query: users', () => {
  beforeEach(() => knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run()));

  afterEach(() => knex.migrate.rollback());

  describe('GET /api/graphql', () => {
    test('Should return array of users', async (done) => {
      request
        .post('/api/graphql')
        .send({
          query: '{users { id, username }}',
        })
        .end((err, res) => {
          if (err) { return done(err); }
          expect(JSON.parse(res.text)).toEqual({
            data: {
              users: [
                {
                  id: '1',
                  username: 'Moses',
                },
              ],
            },
          });
          return done();
        });
    });
  });
  describe('GET /api/graphql', () => {
    test('Should return a single user', async (done) => {
      request
        .post('/api/graphql')
        .send({
          query: '{user(id: 1) { id, username }}',
        })
        .end((err, res) => {
          if (err) { return done(err); }
          expect(JSON.parse(res.text)).toEqual({
            data: {
              user:
                {
                  id: '1',
                  username: 'Moses',
                },
            },
          });
          return done();
        });
    });
  });
});
