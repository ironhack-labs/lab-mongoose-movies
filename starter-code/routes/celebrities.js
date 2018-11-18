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

module.exports = router;
