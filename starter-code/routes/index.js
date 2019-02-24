const express = require('express');
const router  = express.Router();
const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/celebrities', {useNewUrlParser: true}, function(err){
    if(err) console.log("ERROR",err)
    else console.log("connected")
})

mongoose.connect('mongodb://localhost/movies', {useNewUrlParser: true}, function(err){
    if(err) console.log("ERROR",err)
    else console.log("connected")
})

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
