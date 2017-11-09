const express = require('express');
const Celebrity= require('../models/Celebrity');

const router  = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, result) => {
    if (err) { return next(err) }
    console.log(result)
    res.render('celebrities/index', {

      celebrities: result
    });
  });
});


router.get('/:id', (req, res, next) => {
  let id = req.params.id
  Celebrity.findById(id, (err, details) => {
    console.log(details)
    res.render('celebrities/show', {

      celebrities: details

    })
  })
});


module.exports = router;
