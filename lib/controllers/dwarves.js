const { Router } = require('express');
const { Dwarf } = require('../models/dwarves');

module.exports = Router()
  .get('/', async (req, res) => {
    const dwarves = await Dwarf.getAll();
    res.json(dwarves);
  })
  .get('/:id', async (req, res) => {
    const dwarf = await Dwarf.getById(req.params.id);
    res.json(dwarf);
  });
