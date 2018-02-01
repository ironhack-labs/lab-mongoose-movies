const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

// READ 
router.get('/celebrities', (req, res, next) => {
  console.log("HOLA2")
  Celebrity.find().exec((err, celebrities) => {
    console.log("celebrities")
    if (err) { return next(err); }
    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});


module.exports = router;