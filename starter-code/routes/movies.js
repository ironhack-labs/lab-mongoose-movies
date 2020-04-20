const express = require("express")
const router = express.Router()
const Movie = require("../models/movie-model")

router.get('/', (req, res, next) => {
  Movie.find()
    .then(allMovies => res.render('movies/movies', {
      allMovies
    }))
    .catch(err => console.log("An error ocurred", err))
})

router.get('/details/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(selectedMovie => res.render('movies/details', {
      selectedMovie
    }))
    .catch(err => console.log("An error ocurred", err))
})


router.get('/create', (req, res, next) => res.render('movies/new'))
router.post('/create', (req, res, next) => {
  const {
    title,
    genre,
    plot
  } = req.body
  Movie.create({
      title,
      genre,
      plot
    })
    .then(() => res.redirect('/movies'))
    .catch(err => console.log("An error ocurred", err))
})


router.post('/details/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/movies'))
    .catch(err => res.send("An error ocurred", err))
})

router.get('/details/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(editMovie => res.render('movies/edit', {
      editMovie
    }))
    .catch(err => console.log("An error ocurred", err))

})
router.post('/details/:id/edit', (req, res, next) => {
  const {
    title,
    genre,
    plot
  } = req.body

  Movie.findByIdAndUpdate(req.params.id, {
      title,
      genre,
      plot
    }, {
      new: true
    })
    .then(res.redirect(`/movies`))
    .catch(err => console.log("An error ocurred", err))

})

module.exports = router