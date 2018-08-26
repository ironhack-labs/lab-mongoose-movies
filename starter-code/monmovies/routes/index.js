const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Celebs by Jason'});
});

/* GET Celeb LIST */
router.get('/celebrities', (req, res, next) => {
  Celeb.find({}).then(data => { 
    // console.log(data)
    res.render('celebrities', {data, title: 'Celebrities by Jason'});
  })
});


module.exports = router;
