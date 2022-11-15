const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('cryptid routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /cryptids should return a list of cryptids', async () => {
    const resp = await request(app).get('/cryptids');
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "alias": "Bigfoot",
          "id": "1",
          "name": "Sasquatch",
          "origins": "North America",
          "url": "https://en.wikipedia.org/wiki/Bigfoot",
        },
        Object {
          "alias": "Mason Bird Monster",
          "id": "2",
          "name": "Mothman",
          "origins": "Point Pleasant, West Virginia",
          "url": "https://en.wikipedia.org/wiki/Mothman",
        },
        Object {
          "alias": "Nessie",
          "id": "3",
          "name": "Loch Ness Monster",
          "origins": "Loch Ness, Scottish Highlands",
          "url": "https://en.wikipedia.org/wiki/Loch_Ness_Monster",
        },
        Object {
          "alias": "olgoi-khorkhoi",
          "id": "4",
          "name": "Mongolian Death Worm",
          "origins": "Gobi Desert",
          "url": "https://en.wikipedia.org/wiki/Mongolian_death_worm",
        },
        Object {
          "alias": "Leeds Devil",
          "id": "5",
          "name": "Jersey Devil",
          "origins": "Pine Barrens, New Jersey",
          "url": "https://en.wikipedia.org/wiki/Jersey_Devil",
        },
      ]
    `);
  });
  afterAll(() => {
    pool.end();
  });
});
