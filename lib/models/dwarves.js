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
}

module.exports = { Dwarf };
