const express = require('express');
const router  = express.Router();

const Celebrity = require(`../models/celebrity.model.js`)


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities/index', (req, res, next) => {
  Celebrity.find({})
  .then((result) => {
      res.render(`celebrities`, {celebrities:result})
  
  }).catch((err) => {
      console.log(err); 
  }); 
  })

module.exports = router;
