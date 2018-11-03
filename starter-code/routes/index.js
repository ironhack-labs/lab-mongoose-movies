const express = require('express');
const router  = express.Router();
const celebrityModel = require('../models/Celebrity');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/celebrities', (req, res, next) => {
  celebrityModel.find()
    .then(data => {
  res.render('celebrities/celebrities', {data});


    })
    .catch(err => {
      console.log(err)
    })
  console.log('SUCCESS')
})

module.exports = router;
