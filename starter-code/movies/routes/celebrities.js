const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find( (err, celebrity) => {
    if (err) {
      next(err);
    } else {
      res.render('celebrities/index', { title: 'Celebrities', celebrity });
    }
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new', {title: 'Add a new celebrity'});
});

router.get('/:id', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {
      next(err);
    } else {
      res.render('celebrities/show', { title: celebrity.name, celebrity });
    }
  });
});

router.post('/', (req, res, next) => {
  const celebrity = { 
    name: req.body.name,
    occupation: req.body.occupation, 
    catchPhrase: req.body.catchPhrase,
  };

  Celebrity.create(celebrity, (err, docs) => {
    if (err) {
      next(err);
      res.render('celebrities/new', { title: 'Add a new celebrity' });
    } else {
      res.redirect('/celebrities');
    }
  });
});

router.post('/:id/delete', (req, res, next) => {
  let celebrityId = req.params.id;
  
  Celebrity.findByIdAndRemove(celebrityId, (err, docs) => {
    if (err) {
      next(err);
      return err;
    } else {
      res.redirect('/celebrities');
    }
  });
});

router.get('/:id/edit', (req, res, next) => {
  let celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {
      next(err)
    } else {
      res.render('celebrities/edit', { title: 'Edit a celebrity', celebrity });
    }
  });
});

router.post('/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  
  const celebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  Celebrity.findByIdAndUpdate(celebrityId, celebrity, (err, celebrity) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/celebrities');
    }
  });
});


module.exports = router;

