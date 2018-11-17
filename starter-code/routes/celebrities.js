const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render('celebrities/index', {celebrities})
    })
    .catch(error => console.log("Error to find a celebrity" + error))
});

module.exports = router;