const express = require('express');
const router  = express.Router();
const Celeb = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celeb.find()
    .then((moviesFromDB)=>{
      res.render('celeb', {allCelebs: moviesFromDB});
    })
    .catch((err)=>{
      next(err);
    })
});

module.exports = router;
