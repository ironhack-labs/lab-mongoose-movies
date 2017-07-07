var express = require('express');
var Celebrity = require('../models/Celebrity');
var router = express.Router();

// CRUD => R: Retrieve All
router.get('/', function(req, res, next) {
  Celebrity.find({}, (err, c) => {
    console.log(c);
    res.render('celebrities/index', {
      title: 'Lista de  Celebrities',
      celebrities: c
    });
  });
});

router.get('/new', function(req, res, next) {

  res.render('celebrities/new');

});
router.post('/', function(req, res, next) {

  let c = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,

  });
  c.save((err, obj) => {
    if (err) {
      res.redirect('celebrities/new');
    } else {
      res.redirect('/celebrities/');
    }

  });
});

router.post('/:id/delete', function(req, res, next) {
  console.log("delete");
  let id = req.params.id;
  Celebrity.findByIdAndRemove(id, (err, obj) => {
    if (err) {
      return next(err);
    }
    res.redirect('/celebrities/');
  });

});
// Edita una celebrity y pasa los parametros a la ruta post:id
router.get('/:id/edit', function(req, res, next) {
  Celebrity.findById(req.params.id, (err, c) => {
    if (err) {
      console.log(err);
    }
    res.render('celebrities/edit', {
      title: 'Full info',
      celebrity: c
    });
  });

});

router.post('/:id', function(req, res, next) {
  console.log(req.params);
  let {
    name,
    occupation,
    catchPhrase
  } = req.body;
  let edit = {
    name,
    occupation,
    catchPhrase
  };
  Celebrity.findByIdAndUpdate(req.params.id, edit, (err, c) => {
    if (err) {
      console.log(err);
    }
    res.redirect(`/celebrities/`);
  });
});
router.get('/:id', function(req, res, next) {
  console.log(req.params);
  Celebrity.findById(req.params.id, (err, c) => {
    if (err) {
      console.log(err);
    }
    res.render('celebrities/show', {
      title: 'Full info',
      celebrity: c
    });
  });
});




module.exports = router;
