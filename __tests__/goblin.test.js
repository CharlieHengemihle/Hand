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
      Array [
        Object {
          "id": "1",
          "name": "John Goblikon",
          "purpose": "Nekrogoblikon hype man",
          "source": "Los Angeles, California",
          "url": "https://twitter.com/johngoblikon?lang=en",
        },
        Object {
          "id": "2",
          "name": "Monte Gazlow",
          "purpose": "Trade Prince of the Bilgewater Cartel",
          "source": "Booty Bay",
          "url": "https://wowpedia.fandom.com/wiki/Monte_Gazlowe",
        },
        Object {
          "id": "3",
          "name": "Abrianna Mirimm",
          "purpose": "Skysybil",
          "source": "Rosohna",
          "url": "https://criticalrole.fandom.com/wiki/Abrianna_Mirimm",
        },
        Object {
          "id": "4",
          "name": "Riz \\"The Ball\\" Gukgak",
          "purpose": "Student",
          "source": "Aguefort Adventuring Academy",
          "url": "https://dimension20.fandom.com/wiki/Riz_Gukgak",
        },
        Object {
          "id": "5",
          "name": "Robin Redcap",
          "purpose": "Familiar to William de Soules",
          "source": "Scotland",
          "url": "https://mythnerd.com/famous-goblins/",
        },
      ]
    `);
  });
  it('gets a goblin with details', async () => {
    const resp = await request(app).get('/goblins/1');
    const john = {
      id: '1',
      name: 'John Goblikon',
      purpose: 'Nekrogoblikon hype man',
      source: 'Los Angeles, California',
      url: 'https://twitter.com/johngoblikon?lang=en',
    };
    expect(resp.body).toEqual(john);
  });
  it('POST /goblins should add a new goblin', async () => {
    const newGobo = {
      name: 'Norman Osborn',
      purpose: 'Harass Spiderman',
      source: 'New Haven, Connecticut',
      url: 'https://en.wikipedia.org/wiki/Green_Goblin',
    };
    const resp = await (await request(app).post('/goblins')).send(newGobo);
    espect(resp.body).toEqual({
      id: expect.any(String),
      ...newGobo,
    });
  });
  afterAll(() => {
    pool.end();
  });
});
