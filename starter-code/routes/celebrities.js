const express = require('express');
const Celebrity = require('../models/Celebrity.model');
const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({})
  .then(celebrities => {
    console.log(celebrities)
    res.render('celebrities/index', { celebrities });
  })
  .catch(error => next(error))
})

router.get('/:id', (req, res, next) => {
  // const id = req.params.id;
  const { id } = req.params;
  // this CONTROLLER is...
  Celebrity.findOne({ _id: id }) // ... asking for data from the Celebrity MODEL and ...
    .then(celebrity => {
      res.render('celebrities/show', { celebrity }); // ... sending a VIEW to the client
    })
    .catch(error => next(error))
})


module.exports = router;