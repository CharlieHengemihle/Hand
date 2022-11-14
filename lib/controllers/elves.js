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
  })
  .post('/', async (req, res) => {
    const data = await Elf.insert(req.body);
    res.json(data);
  })
  .put('/:id', async (req, res) => {
    const data = await Elf.updateById(req.params.id, req.body);
    res.json(data);
  });
