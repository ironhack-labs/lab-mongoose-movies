const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

/*          GET          */

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebs) => {
    if (err) { return next(err) }
    res.render('celebrities/index', { celebs });
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, data) => {
    if (err) { return next(err) }
    res.render('celebrities/show', { data });
  });
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, data) => {
    if (err) { return next(err) }
    res.render('celebrities/edit', { data });
  });
});

/*          POST          */

router.post('/', (req, res, next) => {
  const celebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
}

  const newCeleb = new Celebrity( celebInfo );

  newCeleb.save((err) => {
    if (err) {
      next(err);
    } else {
      res.redirect('celebrities/new');
    }
  });
});

router.post('/:id', (req, res, next) => {

  const celebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }

  Celebrity.update({ _id: req.params.id}, celebInfo, (err) => {

    if (err) {
      next(err);
    } else {
      res.redirect('/celebrities');
    }
  });
});

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/celebrities');
    }
  });
});

module.exports = router;
