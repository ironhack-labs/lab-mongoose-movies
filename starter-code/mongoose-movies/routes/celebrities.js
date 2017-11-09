var express = require('express');
const Celebrity = require('../models/celebrity');
var router = express.Router();

/* GET celebrities listing. */
router.get('/', function(req, res, next) {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {return next(err);}
    res.render('celebrities/index', {celebrities: celebrities});
  });
});

module.exports = router;
