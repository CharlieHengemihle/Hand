const { Router } = require('express');
const { Dwarf } = require('../models/dwarves');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const dwarf = await Dwarf.getById(req.params.id);
      if (!dwarf) {
        next();
      }
      res.json(dwarf);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const dwarves = await Dwarf.getAll();
    res.json(dwarves);
  })
  .post('/', async (req, res) => {
    const data = await Dwarf.insert(req.body);
    res.json(data);
  })
  .put('/:id', async (req, res) => {
    const data = await Dwarf.updateById(req.params.id, req.body);
    res.json(data);
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Dwarf.delete(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
