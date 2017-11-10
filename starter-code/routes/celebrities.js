const express = require('express');
const Celebrity = require('../models/celebrity');
const route = express.Router();


route.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      return next(err);
    }
    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});


module.exports = router;
