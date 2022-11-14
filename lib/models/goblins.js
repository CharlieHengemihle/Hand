const pool = require('../utils/pool');

class Goblin {
  id;
  name;
  purpose;
  source;
  url;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.purpose = row.purpose;
    this.source = row.source;
    this.url = row.url;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from goblins');
    return rows.map((row) => new Goblin(row));
  }
}

module.exports = { Goblin };
