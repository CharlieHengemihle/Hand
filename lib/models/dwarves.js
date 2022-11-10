const pool = require('../utils/pool');

class Dwarf {
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
    const { rows } = await pool.query('SELECT * from dwarves');
    return rows.map((row) => new Dwarf(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from dwarves WHERE id = $1', [
      id,
    ]);
    return new Dwarf(rows[0]);
  }

  static async insert({ name, purpose, source, url }) {
    const { rows } = await pool.query(
      `
      INSERT INTO dwarves (name, purpose, source, url) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *
      `,
      [name, purpose, source, url]
    );
    return new Dwarf(rows[0]);
  }
}

module.exports = { Dwarf };
