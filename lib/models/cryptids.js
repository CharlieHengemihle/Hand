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

  static async insert({ name, alias, origins, url }) {
    const { rows } = await pool.query(
      `
        INSERT INTO cryptids (name, alias, origins, url)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
      [name, alias, origins, url]
    );
    return new Cryptid(rows[0]);
  }
}

module.exports = { Cryptid };
