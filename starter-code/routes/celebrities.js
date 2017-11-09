const express = require('express');
const router = express.Router();
const Celebrities = require('../models/celebrity');



router.get('/', (req, res) => {
  Celebrities.find({}, (err, celebrities) => {
    if (err) {
      return next(err);
    }

    res.render('celebrities/index', {
      celebritiesArray: celebrities
    })
  });
});

module.exports = router;
