const express = require('express');
const Celebrity = require('../models/Celebrity.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log("holi");
  Celebrity.find({}, (err, p) => {
    if(err) {
      return next(err);
    } else {
      res.render('celebrities/index', {
        title: 'Celebs Title',
        celebrities: p
      });
    }
  });
});

router.get('/new', function(req, res, next) {
  Celebrity.find({}, (err, p) => {
    if(err) {
      return next(err);
    } else {
      res.render('celebrities/new', {
        title: 'New celebs',
        celebrities: p
      });
    }
  });
});

router.get('/:id', function(req, res, next) {
  Celebrity.findById(req.params.id, (err, p) => {
    if(err){
      return next(err);
    } else {
      res.render('celebrities/show', {
        title: 'Some title',
        celebrity: p
      });
    }
  });
});

router.post('/', function(req, res, next) {
  let p = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  });
  p.save((err, obj) => {
    if(err){
      res.redirect('/celebrities/new');
    }
    res.redirect('/celebrities');
  });
});


module.exports = router;
