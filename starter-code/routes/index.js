const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celebrity')
const Movie = require("../models/movies")
/* GET home page */
router.get('/', (req, res, next) => {
  console.log('=-=--=-=--=',req.session)
  console.log('=-=--=-=--=',req.user)
  res.render('index');
});

module.exports = router;
