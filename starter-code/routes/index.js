const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/celebrities', (req, res, next) => {
  Celebrity.find().then (data => {
    
    console.log(`This is the gathered data:`);
    console.log(data);
    
    
    res.render('../views/celebrities/index', {data : data});
  })
  
  
});










module.exports = router;