const pool = require('../utils/pool');

class Cryptid {
  id;
  name;
  alias;
  origins;
  url;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.alias = row.alias;
    this.origins = row.origins;
    this.url = row.url;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from cryptids');
    return rows.map((row) => new Cryptid(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from cryptids
        WHERE id = $1
        `,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Cryptid(rows[0]);
  }
}

module.exports = { Cryptid };
