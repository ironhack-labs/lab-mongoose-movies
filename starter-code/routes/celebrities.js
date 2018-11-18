const express = require('express');

const router  = express.Router();

const Celebrity = require('../models/Celebrity');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities/index', { celebrities }))
    .catch(err => next(err));
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render('celebrities/show', { celebrity }))
    .catch(err => next(err));
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render('celebrities/edit', { celebrity }))
    .catch(err => next(err));
});

router.post('/celebrities', (req, res, next) => {
  const addedCelebrity = new Celebrity();

  if (req.body.name == '' || req.body.occupation == '' || req.body.catchPhrase == '') res.redirect('/celebrities/new');

  addedCelebrity.name = req.body.name;
  addedCelebrity.occupation = req.body.occupation;
  addedCelebrity.catchPhrase = req.body.catchPhrase;

  addedCelebrity.save()
    .then(() => res.redirect('/celebrities'))
    .catch(() => res.redirect('/celebrities/new'));
});

router.post('/celebrities/:id', (req, res, next) => {
  const editedCelebrity = {};

  if (req.body.name == '' || req.body.occupation == '' || req.body.catchPhrase == '') res.redirect('/celebrities/edit');

  editedCelebrity.name = req.body.name;
  editedCelebrity.occupation = req.body.occupation;
  editedCelebrity.catchPhrase = req.body.catchPhrase;

  Celebrity.findByIdAndUpdate(req.params.id, editedCelebrity)
    .then(() => res.redirect('/celebrities'))
    .catch(() => res.redirect(`/celebrities/${req.params.id}/edit`));
});


router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(err => next(err));
});

module.exports = router;
