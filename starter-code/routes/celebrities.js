const express = require('express');
const router  = express.Router();
const celebrities = require("../models/Celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET Celebrities */
router.get('/celebrities/', (req, res, next) => {
  Celebrity.find()
  .then((allCelebrities) => {
    res.render('/celebrities', { Celebrities: allCelebrities })
  }).catch((err) => {
    console.log("Error")
  })
  // celebrities.find().then(celebritiesFound => res.render("/celebrities/index", {celebritiesFound}));
});


module.exports = router; 