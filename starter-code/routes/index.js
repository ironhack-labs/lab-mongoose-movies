const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebs', (req, res, next) => {
  
  Celebrity.find().then(celebsFromDb=>{
    console.log(celebsFromDb)
    res.render('celebs.hbs', {celebsFromDb})
  })
});

router.get('/celebrity-detail/:id', (req, res, next) => {
  Celebrity.findOne({_id: req.params.id}).then(celeb => {
    console.log(celeb)
    res.render('details.hbs', { celeb: celeb })
  })
  .catch(err => {
    console.log(err)
  })
});

module.exports = router;
