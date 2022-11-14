const { Router } = require('express');
const { Goblin } = require('../models/goblins');

module.exports = Router().get('/', async (req, res) => {
  const goblins = await Goblin.getAll();
  res.json(goblins);
});
