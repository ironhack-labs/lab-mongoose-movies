const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(allMovies => {
      console.log('movies', allMovies)
      res.render('movies', { allMovies })
    })
    .catch(err => {
      next()
      console.log('Error while retrieving movies: ', err)
      return err
    })
})

router.get('/details/:id', (req, res, next) => {

  Movie.findById(req.params.id)
    .then(detailsMovies => {
      res.render('movies/show', detailsMovies)
    })
    .catch(err => {
      next()
      console.log('Error while retrieving movies: ', err)
      return err
    })
})


router.get('/new', (req, res, next) => res.render('movies/new'))
router.post('/new', (req, res, next) => {
  const { title, genre, plot } = req.body

  Movie.create({ title, genre, plot })
    .then((res.redirect('/movies')))
    .catch(err => console.log("Error while retrieving new movie", err))

})


router.post('/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.query.id)
    .then(theMovieDelate => res.redirect('/movies'))
    .catch(err => console.log("Error while deleting the movie", err))
})


router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieEdit => res.render('movies/edit', movieEdit))
    .catch(err => {
      next()
      console.log('Error while retrieving movies: ', err)
      return err
    })
})
router.post('/:id', (req, res, next) => {

  const { title, genre, plot } = req.body

  Movie.findByIdAndUpdate(req.params.id, { title, genre, plot }, { new: true })
    .then(updateMovie => {
      console.log(updateMovie)
      res.redirect(`/movies/details/${updateMovie._id}`)
    })
    .catch(err => {
      next()
      console.log('Error while retrieving Movies: ', err)
      return err
    })
})





module.exports = router;