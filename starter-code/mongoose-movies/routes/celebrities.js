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

router.get('/:id', function(req, res, next) {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {return next(err);}
    res.render('celebrities/show', {celebrity: celebrity});
  });
});

module.exports = router;
