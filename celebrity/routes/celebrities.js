var express = require('express');
var Product = require('../models/celebrity');
var router = express.Router();

router.get('/', function(req, res, next) {
  Product.find({}, (err, p) => {
    res.render('celebrities/index');
  });
});

router.get('/show', (req, res, next) => {
  const CelebrityId = req.query.id;

  Product.findById(celebrityId, (err, celebrities) => {
    if (err) { return next(err); }
    res.render('celebrities/show', { celebrities: celebrities });
  });
});

router.get('/celebrities/new', (req, res, next) => {
      res.render('celebrities/new');
});

router.post('/celebrities', (req, res, next) => {
  console.log(req.body);
  let celebrityObj = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  });
  celebrityObj.save((err, obj) => {
    if (err) {
      return next(err);
    } else {
      res.redirect('/celebrities');
    }
  });
});

router.get('/:id/delete', function(req, res, next) {
  let id = req.params.id;
  Product.findByIdAndRemove(id, (err, obj) => {
    if (err){ return next(err); }
    res.redirect("/celebrities");
  });
});

module.exports = router;
