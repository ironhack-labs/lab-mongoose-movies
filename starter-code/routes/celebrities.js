const express = require('express');
const router  = express.Router();
const Celebrities = require("../models/Celebrity");


router.get('/', (req,res,next) => {
  res.render('index')
})


router.get('/celebrities', (req, res, next) => {
  Celebrities
    .find()
    .then(allCelebs => {
      res.render('celebrities/index', {allCelebs});
    })
    .catch(err => {
      next();
      console.log(`There was an error : \n ${err}`)
    })
});

module.exports = router;
