const express = require('express');
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

const router = express.Router();
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* Get celebritys page*/
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesfromDB => {
      res.render('celebrities', {
        listOfCelebrities: celebritiesfromDB
      })
    })
    .catch(err => console.log(err))
})

/*Get the movies page*/
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(moviesfromDB => {
      // console.log("movie", moviesfromDB)
      res.render('movies', {
        listOfMovies: moviesfromDB
      })
    })
    .catch(err => console.log(err))
})

/*Get celebrity details*/
router.get('/celebrities/:id', (req, res, next) => {
  let id = req.params.id
  Celebrity.findById(id)
    .then(celeb => {
      res.render('celebrity-detail', {
        celebrity: celeb
      })
    })
    .catch(err => console.log(err))
})

/*Get movie details*/
router.get('/movies/:id', (req, res, next) => {
  let id = req.params.id
  Movie.findById(id)
    .then(movie => {
      res.render('movie-detail', {
        movie: movie
      })
    })
    .catch(err => console.log(err))
})

/*Call Add new celebrity page*/
router.get('/new-celebrities', (req, res, next) => {
  res.render('add-celebrity')
})

/*Create new celebrity*/
router.post('/new-celebrities', (req, res, next) => {
  if (!req.body.name) {
    res.render('add-celebrity', {
      error: "The name must be filled"
    })
    return
  }
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })
    .then(celebrity => {
      res.redirect('/celebrities')
    })
})

/*Call Add new movie page*/
router.get('/new-movies', (req, res, next) => {
  res.render('add-movie')
})

/*Create new movie*/
router.post('/new-movies', (req, res, next) => {
  if (!req.body.title) {
    res.render('add-movie', {
      error: "The title must be filled"
    })
    return
  }
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  })
    .then(movie => {
      res.redirect('/movies')
    })
})

/*Delete a celebrity*/
router.post('/celebrities/:id/delete', (req, res, next) => {
  let id = req.params.id
  Celebrity.findByIdAndRemove(id)
    .then(celebrity => {
      res.redirect('/celebrities')
    })
})

/*Delete movies*/
router.post('/movies/:id/delete', (req, res, next) => {
  let id = req.params.id
  Movie.findByIdAndRemove(id)
    .then(movie => {
      res.redirect('/movies')
    })
})

/*Call Edit a celebrity Page*/
router.get('/celebrities/:id/edit', (req, res, next) => {
  let id = req.params.id
  Celebrity.findById(id)
    .then(celebrity => { res.render('edit-celebrity', { celebrity: celebrity }) })
    .catch(err => { console.log(err) })
})
/*Edit the celebrity*/
router.post('/celebrities/:id/edit', (req, res, next) => {
  let id = req.params.id
  Celebrity.findByIdAndUpdate(id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })
    .then(something => { res.redirect('/celebrities') })
})

/*Call Edit a movie Page*/
router.get('/movies/:id/edit', (req, res, next) => {
  let id = req.params.id
  Movie.findById(id)
    .then(movie => { res.render('edit-movie', { movie: movie }) })
    .catch(err => { console.log(err) })
})
/*Edit the movie*/
router.post('/movies/:id/edit', (req, res, next) => {
  let id = req.params.id
  Movie.findByIdAndUpdate(id, {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  })
    .then(something => { res.redirect('/movies') })
})

module.exports = router;
