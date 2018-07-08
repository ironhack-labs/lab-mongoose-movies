const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('routes/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      console.log(celebrities);
      res.render("celebrities", { celebrities });
    })
    .catch(err => console.log(err));
});

module.exports = router;
