const express = require('express');
const router  = express.Router();
const Celebrity = require(`../models/Celebrity`)

router.get('/', (req, res, next) => {
  Celebrity.find().then((allCelebs) =>{
  res.render('celebrities/index', {allCelebs});
  })
});

router.get('/:id', (req, res, next) => {
  Celebrity.findOne({ _id: req.params.id })
    .then((celebrityFound) => {
      res.render('celebrities/show', celebrityFound)
    })
});

module.exports = router;
