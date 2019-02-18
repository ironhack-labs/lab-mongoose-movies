const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find().then(allCelebrities => {
    console.log(allCelebrities)
    res.render('celebrities.hbs', {celebrities: allCelebrities});
  })
})

router.get('/celebrity/:id', (req, res, next) => {
  console.log(req.params)
  Celebrity.findOne({ _id: req.params.id }).then(oneCelebrity => {
    console.log(oneCelebrity)
    res.render('celebrity-details.hbs', { celebrityDetails: oneCelebrity });
  })

})

module.exports = router;
