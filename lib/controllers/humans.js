const { Router } = require('express');
const { Human } = require('../models/humans');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const human = await Human.getById(req.params.id);
      if (!human) {
        next();
      }
      res.json(human);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const humans = await Human.getAll();
    res.json(humans);
  })
  .post('/', async (req, res) => {
    const data = await Human.insert(req.body);
    res.json(data);
  })
  .put('/:id', async (req, res) => {
    const data = await Human.updateById(req.params.id, req.body);
    res.json(data);
  });
