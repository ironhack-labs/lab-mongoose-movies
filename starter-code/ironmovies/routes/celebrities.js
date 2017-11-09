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

module.exports = router;
