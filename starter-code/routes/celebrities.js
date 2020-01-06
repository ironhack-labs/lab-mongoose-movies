const express = require('express');
const celebrities = express.Router();
const Celebrity = require('../models/celebrity.js')

celebrities.get('/', async (req, res, next) => {
  try {
    const celebritiesArr = await Celebrity.find();
    res.render('../views/celebrities/index.hbs', {celebritiesArr})

  } catch(err) {
    next(err)
  }
  // res.render('../views/celebrities/index.hbs', {name: 'lalalala'})
})

module.exports = celebrities;