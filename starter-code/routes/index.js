const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose')
const Celebrities = require('../models/celebrity.js')

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


/* GET home page */

router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/celebrities',(req, res, next) =>{

// Celebrities.find({},(err,data)=>{

//   res.render('celebrities/index.hbs',{data})
// })

 
// })





module.exports = router;
