const { Router } = require('express');
const { Cryptid } = require('../models/cryptids');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const cryptid = await Cryptid.getById(req.params.id);
      if (!cryptid) {
        next();
      }
      res.json(cryptid);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const cryptids = await Cryptid.getAll();
    res.json(cryptids);
  })
  .post('/', async (req, res) => {
    const data = await Cryptid.insert(req.body);
    res.json(data);
  });
