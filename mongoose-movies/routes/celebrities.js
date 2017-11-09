const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/', (req, res, next) => {

  Celebrity.find({}, (err, celebrities) => {
      if (err) { return next(err) }
      res.render('celebrities/index', {
        celebrities: celebrities
      });
    });
  });

  module.exports = router;