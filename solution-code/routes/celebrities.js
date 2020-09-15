const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js');

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities/index', {celebrities}))
    .catch(err => next(err))
  ;
});

router.post('/', (req, res, next) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchPhrase = req.body.catchPhrase;

  const celebrity = new Celebrity({
    name,
    occupation,
    catchPhrase
  });
  
  celebrity.save()
    .then(celebrity => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      res.render('celebrities/new');
    })
  ;

});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
});

router.get('/:id', (req, res, next) => {
  Celebrity.findOne({_id: req.params.id})
    .then(celebrity => res.render('celebrities/show', {celebrity}))
    .catch(err => next(err))
  ;
});

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity => res.redirect('/celebrities'))
    .catch(err => next(err))
  ;
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findOne({_id: req.params.id})
    .then(celebrity => res.render('celebrities/edit', {celebrity}))
    .catch(err => next(err))
  ;
});

router.post('/:id', (req, res, next) => {
  Celebrity.update({ _id: req.params.id }, { $set : {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  }})
    .then(celebrity => res.redirect('/celebrities'))
    .catch(err => next(err))
  ;
});

module.exports = router;