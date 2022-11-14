const { Router } = require('express');
const { Elf } = require('../models/elves');

module.exports = Router().get('/', async (req, res) => {
  const elves = await Elf.getAll();
  res.json(elves);
});
