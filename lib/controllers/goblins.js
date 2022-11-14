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
  });
