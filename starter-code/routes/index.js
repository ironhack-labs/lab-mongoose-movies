const express = require('express');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then(celebritiesFromDB => res.render('celebrities/index', { celebritiesFromDB }))
  .catch(error => console.log('Error found', error))
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => res.render('celebrities/show', { celebrity }))
  .catch(error => console.log("Couldn't find the celebrity page", error))
})

router.get('/addCelebrity', (req, res, next) => {
  res.render('celebrities/new')
});

router.post('/addCelebrity', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({name, occupation, catchPhrase})
  .then(newCelebrity => {
    res.redirect('/celebrities')
    console.log(`${newCelebrity.name} inserted in database`)
  })
  .catch(error => {
    res.redirect('/addCelebrity')
    console.log('Error when adding new celebrity', error)
  })
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(removedCelebrity => console.log(`Celebrity removed`))
  .catch(error => {
    console.log('An error has ocurred when trying to remove celebrity', error)
    res.redirect('/celebrities')
  })
})

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => res.render('celebrities/edit', { celebrity }))
  .catch(error => console.log("Couldn't find the editing page", error))
})

router.post('/celebrities/:id', (req, res, nex) => {
  // const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, req.body)
  .then(celebrity => {
    console.log(`${celebrity.name} updated`)
    res.redirect('/celebrities')
  })
  .catch(error => console.log('An error has ocurred when updating celebrity', error))
})

// MOVIES

router.get('/movies', (req, res, next) => {
  Movie.find({})
  .then(moviesFromDB => res.render('movies/index', { moviesFromDB }))
  .catch(error => console.log('Error found', error))
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => res.render('movies/show', { movie }))
  .catch(error => console.log("Couldn't find the movie page", error))
})

module.exports = router;
