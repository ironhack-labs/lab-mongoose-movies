const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity')

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new.hbs')
});

router.get('/celebrities/:id/edit', (req, res, next) => {

  Celebrity.findById(req.params.id)
  .then(celebrity => {
    res.render("celebrities/edit", {celebrity})
    })
  .catch(error => console.log(error))

});

router.post('/celebrities/:id/delete', (req, res, next) => {

  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(err));
});

router.post('/celebrities/:id', (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id, {$set: req.body})
  .then(() => res.redirect('/celebrities'))
  .catch(err => console.log(err))
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(detailCelebrity => {
    res.render('celebrities/show', {celebrity: detailCelebrity});
  })
  .catch(err => console.log(err))
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(allCelebrities => {
    res.render('celebrities/index', {celebrities: allCelebrities});
  })
  .catch(err => console.log(err))
});

router.post('/celebrities', (req, res, next) => {
  Celebrity.create(req.body)
  .then(allCelebrities => {
    res.redirect('/celebrities');
  })
  .catch(err => console.log(err))
});

module.exports = router;
