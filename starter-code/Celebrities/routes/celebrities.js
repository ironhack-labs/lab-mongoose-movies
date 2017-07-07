var express = require('express');
const Celebrity = require('../models/Celebrity');
var router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, p) => {
    if (err) {
      next();
    } else {
      res.render('celebrities/index', {
        title: 'Divas',
        celebrities: p
      });
    }
  });
});


router.get('/:id', function(req, res, next) {
  Celebrity.findById(req.params.id, (err, p) => {
    if (err) {
      next();
      return;
    }
    res.render('celebrities/show', {
      celebrity: p
    });
  });
});

module.exports = router;
