const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('index goblins', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /goblins should return a list of goblins', async () => {
    const resp = await request(app).get('/goblins');
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "message": "Not Found",
        "status": 404,
      }
    `);
  });
  afterAll(() => {
    pool.end();
  });
});
