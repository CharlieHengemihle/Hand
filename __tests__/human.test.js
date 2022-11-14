const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('humans routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /humans should return a list of humans', async () => {
    const resp = await request(app).get('/humans');
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "name": "Finn Mertens",
          "purpose": "The Last Human",
          "source": "Land of Ooo",
          "url": "https://adventuretime.fandom.com/wiki/Finn",
        },
        Object {
          "id": "2",
          "name": "Thomas A. Anderson",
          "purpose": "Free Humanity from the Matrix",
          "source": "Lower Downtown, Capital City, USA",
          "url": "https://en.wikipedia.org/wiki/Neo_(The_Matrix)",
        },
        Object {
          "id": "3",
          "name": "Earnest Marks",
          "purpose": "Manage the ascencion of Paper Boi",
          "source": "Atlanta, Georgia",
          "url": "https://en.wikipedia.org/wiki/Atlanta_(TV_series)",
        },
        Object {
          "id": "4",
          "name": "Elendil",
          "purpose": "High King of the Dúnedain",
          "source": "Númenor",
          "url": "https://lotr.fandom.com/wiki/Elendil",
        },
        Object {
          "id": "5",
          "name": "Richard Stink",
          "purpose": "Harbinger of Seasonal Scents",
          "source": "Huntington, West Virginia",
          "url": "https://mbmbam.fandom.com/wiki/Richard_Stink",
        },
      ]
    `);
  });
  it('gets human with detail', async () => {
    const resp = await request(app).get('/humans/1');
    const finn = {
      id: '1',
      name: 'Finn Mertens',
      purpose: 'The Last Human',
      source: 'Land of Ooo',
      url: 'https://adventuretime.fandom.com/wiki/Finn',
    };
    expect(resp.body).toEqual(finn);
  });
  afterAll(() => {
    pool.end();
  });
});
