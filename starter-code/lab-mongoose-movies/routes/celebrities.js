const express = require('express');
const Celeb = require('../models/celebrity');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('Enter Celeb');

  Celeb.find({}, (err, celeb) => {
    if (err) {
      return next(err);
    }

    res.render('celebrities/index', {celeb : celeb});
  });
});

module.exports = router;
