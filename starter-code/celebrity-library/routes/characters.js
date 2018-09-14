const express = require('express');
const router  = express.Router();
const Celebrity    = require('../models/celebrity')
const Movie    = require('../models/movie')
const ensureLogin = require("connect-ensure-login");

router.get('/characters', (req, res, next) => {
  res.render('myCharacters')
});


module.exports = router;