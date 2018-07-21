const express = require('express');
const Celebrity = require('../models/celebrity.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then((celebrityArray) => {
      res.render('celebrities/list', { celebrityArray });
    })
    .catch((err) => {
      console.log('Je suis retrasé');
      next(err);
    });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId)
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/:id/update', (req, res, next) => {
  const celebrityId = req.params.id;
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then((celebrity) => {
      console.log(celebrity);
      res.render('celebrities/detail',  { celebrity });
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/add', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/:id/destroy', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findByIdAndRemove(celebrityId)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
