const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('index humans', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /dwarves should return a list of humans', async () => {
    const resp = await request(app).get('/humans');
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
