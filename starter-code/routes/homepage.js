const mongoose     = require('mongoose');
const express = require('express')
const router = express.Router();
const Celebrity     = require('../models/Celebrity');

router.get('/homepage', (req, res, next) => {
  res.render('homepage');
// Celebrity.find()
// .then((allCelebrities)=>{

//   res.render('index', {theCelebs: allCelebrities});

// })
// .catch((err)=>{
//   next(err);
// })
});









// router.get('/homepage', (req, res, next) => {
// //where you see 'homepage' must match the name of the file, ex homepage.hbs
//   res.render('homepage')
// })




module.exports = Celebrity;