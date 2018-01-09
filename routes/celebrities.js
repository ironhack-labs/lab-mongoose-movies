const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.js');

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      console.error(err);
    };
    res.render('celebrities/index', {
      celebrities,
    });
  });
});

module.exports = router;