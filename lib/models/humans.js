const pool = require('../utils/pool');

class Human {
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
    const { rows } = await pool.query('SELECT * from humans');
    return rows.map((row) => new Human(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from humans
        WHERE id = $1
        `,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Human(rows[0]);
  }
}

module.exports = { Human };
