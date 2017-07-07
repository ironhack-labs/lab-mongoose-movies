var express = require('express');
var Celebrity = require('../models/Celebrity');
var router = express.Router();



router.get('/', function(req, res, next) {
  Celebrity.find({}, (err, c) => {
    if (err) {
      return next(err);
    } else {
    res.render('celebrities/index', {
      title: 'Listado de cantamañanas',
      celebrities: c
    });
  }});
});

router.get('/new', function(req, res, next) {
  Celebrity.find({}, (err, c) => {
    if (err) {
      return next(err);
    } else {
    res.render('celebrities/new', {
      title: 'Create a new celebrity',
      celebrities: c
    });
  }});
});

router.post('/', function(req, res, next) {
  let c = new Celebrity({
    name: req.body.name,
    ocupation: req.body.ocupation,
    catchPhrase: req.body.catchPhrase
  });
  c.save((err, obj) => {
    if (err) {
      res.render('celebrities/new', {
        title: 'Listado de cantamañanas',
        celebrities: c
      });
    } else {
      res.redirect('celebrities/new');
    }});
});


router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  Celebrity.findById(id, (err, c) => {
    if (err) {
      return next(err);
    }
      res.render('celebrities/show', {
        title: 'Celebrity Profile',
        celebrities: c
      });
  });
});


router.post('/:id/delete', function(req, res, next) {
  let id = req.params.id;
  Celebrity.findByIdAndRemove(id, (err, obj) => {
    if (err){ return next(err); }
    res.redirect("/celebrities");
  });
});

router.post('/:id', (req, res, next) => {
  let updates = {
    name: req.body.name,
    ocupation: req.body.ocupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(req.params.id, updates, (err, c) => {
    if(err){
      return next(err);
    }
    res.redirect('/celebrities');
  });
});


router.get('/:id/edit',(req, res, next) => {
  let id = req.params.id;
  Celebrity.findById(id, (err,c) => {
    if (err) {
      return next(err);
    }
    res.render('celebrities/edit', {
      title: "Celebrity edit",
      celebrities: c
    });
  });
});


module.exports = router;
