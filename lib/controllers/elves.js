const { Router } = require('express');
const { Elf } = require('../models/elves');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const elf = await Elf.getById(req.params.id);
      if (!elf) {
        next();
      }
      res.json(elf);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const elves = await Elf.getAll();
    res.json(elves);
  });
