/* eslint-disable eqeqeq */
/* eslint-disable import/order */
const mongoose = require('mongoose');
const Celebrity = require('../public/Models/Celebrity');

const dbName = 'Celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);
const express = require('express');

const router  = express.Router();

/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrity => res.render('celebrities/index', { celebrity }))
    .catch(err => next(err));
});

router.get('/celebrities/show/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render('celebrities/show', { celebrity }))
    .catch(err => next(err));
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchFrase } = req.body;
  if (req.body.name == '' || req.body.occupation == '' || req.body.catchPhrase == '') { res.redirect('celebrities/new'); }
  const newCelebrity = new Celebrity({
    name,
    occupation,
    catchFrase,
  });
  newCelebrity.save()
    .then(() => res.redirect('celebrities'))
    .catch(() => { res.redirect('celebrities/new'); });
});

module.exports = router;
