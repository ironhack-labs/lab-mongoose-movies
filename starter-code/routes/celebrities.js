var express = require('express');
var router = express.Router();

const Celebrity = require('../models/celebrities')

router.get('/', function (req, res, next) {
  Celebrity.find({}, function (err, celebrities) {
    if (err) return next(err)
    res.render('celebrities/index', {
      celebrities
    });
  });
});

router.get('/new', function (req, res, next) {
  res.render('celebrities/new', {
  });
});

router.post('/new', function (req, res, next) {
  const body = req.body
  const celebrity = new Celebrity(body)
  celebrity.save(function (err, doc) {
    if (err) return next(err)
    res.redirect('/celebrities')
  });
});

router.get('/edit/:id', function (req, res, next) {
  const id = req.params.id
  Celebrity.findOne({_id: id}, function (err, celebrity) {
    if (err) return next(err)
    res.render('celebrities/edit', {
      celebrity
    });
  });
});

router.get('/info/:id', function (req, res, next) {
  const id = req.params.id
  Celebrity.findOne({_id: id}, function (err, celebrity) {
    if (err) return next(err)
    res.render('celebrities/info', {
      celebrity
    });
  });
});

router.post('/edit/:id', function (req, res, next) {
  const id = req.params.id
  const body = req.body
  const {name, ocupattion, catchPhrase} = body

  const criteria = {_id: id}
  const update = {$set: {name, ocupattion, catchPhrase}}

  Celebrity.updateOne(criteria, update, function (err, celebrity) {
    if (err) return next(err)
    res.redirect('/celebrities')
  });
});

router.get('/delete/:id', function (req, res, next) {
  const id = req.params.id
  const criteria = {_id: id}
  Celebrity.remove(criteria, function (err) {
    if (err) return next(err)
    res.redirect('/celebrities')
  });
});



module.exports = router;
