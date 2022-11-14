const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('index elves', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /elves should return a list of elves', async () => {
    const resp = await request(app).get('/elves');
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "message": "Not Found",
        "status": 404,
      }
    `);
  });
});
