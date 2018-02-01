var express = require('express');
var router = express.Router();

const Celebrity = require('../models/celebrity')

router.get('../routes/celebrities', function(req, res, next) {
  celebrity.find({}, (err, result) => {
    if (err) {
      console.log('error')
      return next(err);
    }
    else {
      let celebArr = {
        celebs: name
      }
      res.render('index', celebArr);
    }
  });
});
// res.send('this would be the product list');
// });

module.exports = router

