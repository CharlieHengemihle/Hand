const { Router } = require('express');
const { Goblin } = require('../models/goblins');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const goblin = await Goblin.getById(req.params.id);
      if (!goblin) {
        next();
      }
      res.json(goblin);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const goblins = await Goblin.getAll();
    res.json(goblins);
  })
  .post('/', async (req, res) => {
    const data = await Goblin.insert(req.body);
    res.json(data);
  })
  .put('/:id', async (req, res) => {
    const data = await Goblin.updateById(req.params.id, req.body);
    res.json(data);
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Goblin.delete(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
