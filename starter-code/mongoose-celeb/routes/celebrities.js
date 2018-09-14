const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.js');

  /* GET home page */
  router.get('/', (req, res, next) => {
    Celebrity.find()
    .then((data) => {
      console.log(data)
      res.render('celebrities/index', {data});
    })
    .catch(e => { next(e);})
  });

module.exports = router;
