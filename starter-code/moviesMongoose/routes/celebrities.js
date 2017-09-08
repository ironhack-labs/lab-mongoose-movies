var express = require('express');
var router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, products) => {
    if (err) { return next(err); }

    res.render('celebrities', {
      title:'Lista de celebrities',
      celebrity: celebrity
    });
  });
});

module.exports = router;
