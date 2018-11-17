const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js');

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error)
    }) 
});

router.get('/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then(celebrity => {
      res.render("celebrities/celebrity", celebrity);
    })
    .catch(error => {
      console.log(error)
    }) 
});


module.exports = router;