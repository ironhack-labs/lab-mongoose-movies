
//Calls expressJS
const express = require('express');

//Express router function.
const router = express.Router();

//Calls the Celebrity Model in Models
const CelebrityModel = require('../models/celebrity.js');

//GET celebrities page
router.get('/celebrities', (req, res, next)=>{
  //find method
  CelebrityModel.find()
  //javascript promise syntax
  .then((listOfCelebrities)=>{
    res.render('celebrities', {listOfCelebrities});
    console.log({listOfCelebrities});
  })
  .catch((err)=>{
    //next function tells program to keep looking for succ
    next(err);
    console.log(err);
  })
});


//this sends this file to the router so that the app can see this file and apply the logic
module.exports = router;