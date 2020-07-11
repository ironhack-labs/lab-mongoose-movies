const express = require('express');
const Celebrity = require('../models/celebrity');
const router  = express.Router();

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((dbCelebrities) => {
      console.log(dbCelebrities)
      res.render('celebrities/index', dbCelebrities)
    })
    .catch(error => console.log('Error retrieving celebrities', error))
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
});

router.post('/celebrities', (req, res, next) => {
  const body = req.body
  const newCelebrity = {
    name: body.name,
    occupation: body.occupation,
    catchPhrase: body.catchPhrase
  }
  Celebrity.create(newCelebrity)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(error => {
      console.log('Error adding a new celebrity', error)
      res.render('celebrities/new')
    })

})

router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id
  Celebrity.findById(celebrityId)
    .then((details) => {
      res.render('celebrities/show', details)
    })
    .catch(error => console.log('Error retrieving celebrity details', error))
});

router.post('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id
  const body = req.body
  const updatedCelebrity = {
    name: body.name,
    occupation: body.occupation,
    catchPhrase: body.catchPhrase
  }
  Celebrity.findByIdAndUpdate(celebrityId, updatedCelebrity)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(error => console.log('Error editing celebrity details', error))
});


router.post('/celebrities/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id
  Celebrity.findByIdAndRemove(celebrityId)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(error => {
      console.log('Error trying to eliminate the celebrity', error)
      // next(error)
    })
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id
  Celebrity.findById(celebrityId)
    .then((details) => {
      res.render('celebrities/edit', details)
      console.log('bien')
    })
    .catch(error => {
      console.log('Error trying to get the edit page', error)
      // next(error)
    })
      
});


module.exports = router;