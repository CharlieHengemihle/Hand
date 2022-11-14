const pool = require('../utils/pool');

class Elf {
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
    const { rows } = await pool.query('SELECT * from elves');
    return rows.map((row) => new Elf(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from elves 
        WHERE id = $1
        `,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Elf(rows[0]);
  }

  static async insert({ name, purpose, source, url }) {
    const { rows } = await pool.query(
      `
      INSERT INTO elves (name, purpose, source, url) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *
      `,
      [name, purpose, source, url]
    );
    return new Elf(rows[0]);
  }
}

module.exports = { Elf };
