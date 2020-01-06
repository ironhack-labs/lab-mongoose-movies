const express = require('express');
const celebrities = express.Router();
const Celebrity = require('../models/celebrity.js');

celebrities.get('/', async (req, res, next) => {
  try {
    const celebritiesArr = await Celebrity.find();
    res.render('../views/celebrities/index.hbs', {celebritiesArr});
  } catch (err) {
    next(err);
  }
});

celebrities.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const foundObjFromId = await Celebrity.findById(id);
    res.render('../views/celebrities/show.hbs', foundObjFromId)
  } catch (err) {
    next(err);
  }
});

module.exports = celebrities;
