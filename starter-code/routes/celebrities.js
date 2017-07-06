var express = require('express');
var router = express.Router();
var Celebrity = require('../models/celebrity');

router.get('/', function(req, res, next) {
  Celebrity.find({}, (err, cl) => {
    if (err) {
      next();
      return;
    } else {
      let args = {
        title: "Celebrities",
        celebs: cl
      }
      res.render('celebrities/index', args);
    }
  });
});

router.get('/:id', function(req, res, next) {
  Celebrity.findById(req.params.id, (err, p) => {
    if (err) {
      next();
      return;
    }
    let args = {
      celeb: p
    }
    res.render('celebrities/show', args);
  })
});

router.get('/new', function(req, res, next) {
  let args = {
    title: "New celebrity"
  }
  res.render('celebrities/new', args);
});

router.post('/', function(req, res, next) {
  let {
    name,
    occupation,
    catchPhrase
  } = req.body;
  let args = {
    name,
    occupation,
    catchPhrase
  };

  var celeb = new Celebrity(args);
  celeb.save((err, obj) => {
    if (err) {
      console.log(err);
      res.redirect('/celebrities/new');
    } else {
      console.log('Saved', obj);
      res.redirect('/celebrities');
    }
  })
});

router.get('/:id/delete', function(req, res, next) {
  let id = req.params.id;
  console.log(id);
  Celebrity.findByIdAndRemove(id, (err, p) => {
    if (err) {
      console.log(err);
      next()
      return err;
    }
    res.redirect('/celebrities');
  })
});

module.exports = router;
