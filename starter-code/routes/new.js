const express = require('express');
const router = express.Router();
const Celebs = require('../models/Celebs');

router.get('/celebs',(req,res)=>{
  res.render('celebsForm')
})

router.get('/movies',(req,res)=>{
  res.render('moviesForm')
})
module.exports = router;