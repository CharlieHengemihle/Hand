const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('index dwarves', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /dwarves should return a list of dwarves', async () => {
    const resp = await request(app).get('/dwarves');
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "name": "Gimli",
          "purpose": "Lord of the Glittering Caves",
          "source": "Middle Earth",
          "url": "https://hero.fandom.com/wiki/Gimli",
        },
        Object {
          "id": "2",
          "name": "Balin",
          "purpose": "Lord of Moria",
          "source": "Middle Earth",
          "url": "https://hero.fandom.com/wiki/Balin",
        },
        Object {
          "id": "3",
          "name": "Scout",
          "purpose": "Place flares and reach high places",
          "source": "Deep Rock Galactic",
          "url": "https://deeprockgalactic.fandom.com/wiki/Dwarves",
        },
        Object {
          "id": "4",
          "name": "Driller",
          "purpose": "Use titanium drills and explosives to clear the way",
          "source": "Deep Rock Galactic",
          "url": "https://deeprockgalactic.fandom.com/wiki/Dwarves",
        },
        Object {
          "id": "5",
          "name": "Yagrum Bagran",
          "purpose": "Master Crafter",
          "source": "Corprusarium Bowels",
          "url": "https://elderscrolls.fandom.com/wiki/Yagrum_Bagarn_(Morrowind)",
        },
      ]
    `);
  });
  it('gets dwarf with detail', async () => {
    const resp = await request(app).get('/dwarves/1');
    const gimli = {
      id: '1',
      name: 'Gimli',
      purpose: 'Lord of the Glittering Caves',
      source: 'Middle Earth',
      url: 'https://hero.fandom.com/wiki/Gimli',
    };
    expect(resp.body).toEqual(gimli);
  });
  it('POST /dwarves should make a new dwarf', async () => {
    const newDwarf = {
      name: 'Steve',
      purpose: 'Be a good boy',
      source: 'Hoxxes IV',
      url: 'https://deeprockgalactic.fandom.com/wiki/Steve',
    };
    const resp = await request(app).post('/dwarves').send(newDwarf);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newDwarf,
    });
  });
  it('PUT /dwarves/:id should update an extant dwarf', async () => {
    const resp = await request(app).put('/dwarves/1').send({
      name: 'Jimli',
    });
    expect(resp.body.name).toBe('Jimli');
  });
  it('DELETE /dwarves/:id should delete a dwarf', async () => {
    const resp = await request(app).delete('/dwarves/1');
    expect(resp.status).toBe(200);

    const dwarfResp = await request(app).get('/dwarves/1');
    expect(dwarfResp.status).toBe(404);
  });
  afterAll(() => {
    pool.end();
  });
});
