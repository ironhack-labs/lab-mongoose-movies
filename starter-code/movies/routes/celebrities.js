const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();


router.get('/celebrities', (req, res, next) => {

  Celebrity.find({}, (error, result) => {
      if (error) {
        next(error);
      } else {
        res.render('celebrities', {res: result});
      }
    });
});


module.exports = router;
