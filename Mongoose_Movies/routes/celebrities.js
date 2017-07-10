const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next)  => {
  Celebrity.find({}, (error, celebs) => {
    if (error) {
      return next(error);
    } else {
      // console.log(celebs);
      res.render('celebrities/index', {celebs});
    }
  });
});


module.exports = router;