const express = require('express');
const Celebrities = require('../models/celebrity');

const router  = express.Router();

// router.get('/', (req, res, next) => {
//   const Celebrity = {
//     price: { $lte: req.query.price || 1000 }
//   };

  Celebrities.find(Celebrities, (err, Celebrities) => {
    if (err) { return next(err); }
    console.log(Celebrities);
    res.render('index', {
      Celebrities: Celebrities
    });
  });
//});

module.exports = router;
