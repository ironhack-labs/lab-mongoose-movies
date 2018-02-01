'use strict';

const express = require('express');

const router = express.Router();

const Celebrity = require('../models/celebrities');

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err); }

    res.render('./celebrities/index', {
      celebrities: celebrities
    });
  });
});

module.exports = router;
