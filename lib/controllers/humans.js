const { Router } = require('express');
const { Human } = require('../models/humans');

module.exports = Router().get('/', async (req, res) => {
  const humans = await Human.getAll();
  res.json(humans);
});
