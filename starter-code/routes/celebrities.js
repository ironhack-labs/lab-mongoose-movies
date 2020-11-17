const express = require('express');
const { render } = require('../app');
const router  = express.Router();
const Celebrity = require('../models/celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(allCelebs =>{
    console.log("All celebs:", allCelebs)
    res.render('../views/celebrities/index', {celebs: allCelebs})
  })
  .catch(err => console.log('There has been an error: ', err))
});

router.get('/:id', (req,res,next) => {
  res.render('../views/celebrities/celebsPage')
})

module.exports = router;
