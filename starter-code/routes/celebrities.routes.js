const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
})

router.get('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log('Successfully deleted celebrity');
      res.redirect('/celebrities');
    })
    .catch(error => next(error))
})

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(actor => res.render('celebrities/edit', actor))
    .catch(error => next(error))
})

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .populate('movies')
    .then(actor => {
      console.log(actor)
      res.render('celebrities/show', actor);
    })
    .catch(error => next(error))
})

router.post('/celebrities/:id', (req, res, next) => {
  const updatedCelebrity = req.body;
  updatedCelebrity.id = req.params.id;
  console.log({...updatedCelebrity});
  Celebrity.findByIdAndUpdate(updatedCelebrity.id, updatedCelebrity, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/celebrities')
    }
  }) 
})

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesDB => {
      console.log(celebritiesDB) 
      res.render('celebrities/index', celebritiesDB)
    })
    .catch(error => next(error))
})

router.post('/celebrities', (req, res, next) => {
  const data = req.body;
  const newCelebrity = new Celebrity(data);
  newCelebrity.save()
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(error => {
      console.log('Error while saving new Celebrity', error);
      res.redirect('/celebrities/new');
    })
})

module.exports = router;


