const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render('celebrities/index', { celebrities })
    })
    .catch(error => console.log("Error to find celebrities" + error))
});

router.get('/:_id', (req, res, next) => {
  Celebrity.findById(req.params._id)
    .then(celebrity => {
      res.render('celebrities/show', { celebrity })
    })
    .catch(error => console.log("Error to find a celebrity" + error))
})

module.exports = router;