const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

/* GET products listing. */
router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then((celebrities) => {
      console.log(celebrities);
      res.render('celebrities/index', { celebrities });
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then((result) => {
      res.redirect('/celebrities');
    })
    .catch(next);
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
    .catch(next);
});

router.post('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase })
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch(next);
});

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndRemove(id)
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch(next);
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch(next);
});


module.exports = router;
