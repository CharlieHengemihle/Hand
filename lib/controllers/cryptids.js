const { Router } = require('express');
const { Cryptid } = require('../models/cryptids');

module.exports = Router().get('/', async (req, res) => {
  const cryptids = await Cryptid.getAll();
  res.json(cryptids);
});
