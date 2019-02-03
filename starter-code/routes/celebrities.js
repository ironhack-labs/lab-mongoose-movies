const express = require('express');
const Celebrity = require('../models/celebrity.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      console.log('New celebrity saved to our db');
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log(err);
      res.render('celebrities/new');
    });
});

router.post('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.update({ _id: id }, { name, occupation, catchPhrase })
    .then(() => {
      console.log('Celebrity was updated');
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Celebrity.findByIdAndRemove(id)
    .then(() => {
      console.log('Celebrity was deleted');
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
