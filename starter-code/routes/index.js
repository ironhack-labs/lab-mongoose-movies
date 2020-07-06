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
  .then(removedCelebrity => {
    console.log(`Celebrity removed`)
    res.redirect('/celebrities')
  })
  .catch(error => console.log('An error has ocurred when trying to remove celebrity', error))
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

router.get('/addMovie', (req, res, next) => {
  res.render('movies/new')
});

router.post('/addMovie', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({title, genre, plot})
  .then(newMovie => {
    res.redirect('/movies')
    console.log(`${newMovie.title} inserted in database`)
  })
  .catch(error => {
    res.redirect('/addMovie')
    console.log('Error when adding new movie', error)
  })
})

router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then(removedMovie => {
    console.log(`Movie removed`)
    res.redirect('/movies')
  })
  .catch(error => console.log('An error has ocurred when trying to remove movie', error))
})

router.get('/movies/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => res.render('movies/edit', { movie }))
  .catch(error => console.log("Couldn't find the editing page", error))
})

router.post('/movies/:id', (req, res, nex) => {
  // const { name, occupation, catchPhrase } = req.body;
  Movie.findByIdAndUpdate(req.params.id, req.body)
  .then(movie => {
    console.log(`${movie.name} updated`)
    res.redirect('/movies')
  })
  .catch(error => console.log('An error has ocurred when updating movie', error))
})

module.exports = router;
