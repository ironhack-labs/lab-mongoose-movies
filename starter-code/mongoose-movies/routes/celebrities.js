const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('requested celebriteis');
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities);
      res.render('celebrities', celebrities);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
