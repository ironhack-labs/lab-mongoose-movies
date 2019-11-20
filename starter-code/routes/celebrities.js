const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrities');

router.get('/', (req, res, next) => {
  Celebrity.find({})
  .then(celebrities => res.render('../views/celebrities/index', {celebrities}))
  .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  console.log(req.body);
  const celebrity = new Celebrity({name: name, occupation: occupation, catchPhrase: catchPhrase});
  celebrity.save()
  .then(() => res.redirect('/celebrities'))
  .catch(err => next('/new'));
});

router.get('/new', (req, res, next) => {
  res.render('../views/celebrities/new');
});

router.get('/:celebrityId', (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
  .then(celebrity => res.render('../views/celebrities/show', celebrity))
  .catch(err => next(err));
});

router.post('/:celebrityId', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(req.params.celebrityId, {name: name, occupation: occupation, catchPhrase: catchPhrase})
  .then(() => res.redirect(`/celebrities/${req.params.celebrityId}`))
  .catch(err => next(err));
});

router.post('/:celebrityId/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.celebrityId)
  .then(() => res.redirect('/celebrities'))
  .catch(err => next(err));
});

router.get('/:celebrityId/edit', (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
  .then((celebrity) => res.render('../views/celebrities/edit', celebrity))
  .catch(err => next(err));
});

module.exports = router; 