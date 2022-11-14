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
      Array [
        Object {
          "id": "1",
          "name": "Legolas Greenleaf",
          "purpose": "Prince of the Woodland Realm",
          "source": "Middle Earth",
          "url": "https://lotr.fandom.com/wiki/Legolas",
        },
        Object {
          "id": "2",
          "name": "Celebrimbor",
          "purpose": "Lord of the Gwaith-i-Mírdain",
          "source": "Middle Earth",
          "url": "https://lotr.fandom.com/wiki/Celebrimbor",
        },
        Object {
          "id": "3",
          "name": "Ernest J. Keebler",
          "purpose": "Head Elf",
          "source": "The Hollow Tree Factory",
          "url": "https://en.wikipedia.org/wiki/Keebler_Company#Keebler_Elves",
        },
        Object {
          "id": "4",
          "name": "Remallia Haventree",
          "purpose": "Lead Delegate of the Harpers",
          "source": "Waterdeep",
          "url": "https://forgottenrealms.fandom.com/wiki/Remallia_Haventree",
        },
        Object {
          "id": "5",
          "name": "Kiaransalee",
          "purpose": "Lady of the Dead",
          "source": "Threnody",
          "url": "https://forgottenrealms.fandom.com/wiki/Kiaransalee",
        },
      ]
    `);
  });
  it('gets elf with detail', async () => {
    const resp = await request(app).get('/elves/1');
    const legolas = {
      id: '1',
      name: 'Legolas Greenleaf',
      purpose: 'Prince of the Woodland Realm',
      source: 'Middle Earth',
      url: 'https://lotr.fandom.com/wiki/Legolas',
    };
    expect(resp.body).toEqual(legolas);
  });
  it('POST /elves should make a new elf', async () => {
    const newElf = {
      name: 'Ezuri',
      purpose: 'Renegade Leader',
      source: 'Mirrodin',
      url: 'https://mtg.fandom.com/wiki/Ezuri',
    };
    const resp = await request(app).post('/elves').send(newElf);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newElf,
    });
  });
});
