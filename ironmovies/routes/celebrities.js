const express = require('express');
const Celebrity = require('../models/celebrity');
const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err); }
    // res.send('ok');
    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});

module.exports = router;
