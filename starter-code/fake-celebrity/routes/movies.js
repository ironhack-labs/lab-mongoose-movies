const express = require("express")
const router = express.Router()
const Movie = require('../models/movie')
const Celebrity = require('../models/celebrity')

router.get('/movies/index', (req, res, next) => {
  Movie.find().populate('celebrity')
    .then((data) => {
      res.render('movies/index', {
        movies: data
      })
      console.log(data)
    })
})

router.get('/movies/new', (req, res, next) => {
  console.log("working")
  Celebrity.find()
  .then((data)=>{
    res.render('movies/new', {celeb: data})
  })
  .catch((err)=>{
    next(err)
  })
})

router.get('/movies/:id/edit', (req, res, next) => {
  console.log(req.params)
  let movieId = req.params.id
  Movie.findById(movieId)
    .then((data) => {
      Celebrity.find()
      .then((dat2)=>{
        console.log("=========");
        console.log(dat2.name)
        res.render('movies/edit', {
          movieId: movieId,
          name: data.title,
          data: data,
          dat2: dat2
        })

      })
    })
})

router.post('/movies/update/:id', (req, res, next) => {
  console.log("========================");
  console.log(req.body);
  console.log("========================");
  movieId = req.params.id
  let movieEdit = {
    title: req.body.title,
    image: req.body.image,
    celebrity: req.body.celebrity,
    genre: req.body.genre,
    plot: req.body.genre
  }

  Movie.findByIdAndUpdate(movieId, movieEdit)
    .then((data) => {
      res.redirect('/movies/index')
    })
    .catch(next)

  // Movie.findByIdAndUpdate()
})


router.post('/movies/create', (req, res, next) => {
  // console.log(req.body.celebrity)
  let newMovie = {
    title: req.body.title,
    image: req.body.image,
    celebrity: req.body.celebrity,
    genre: req.body.genre,
    plot: req.body.plot
  }
  Movie.create(newMovie)
    .then((data) => {
      // console.log(req.body.celebrity)
      res.redirect('/movies/index')
    })
    .catch(next)
})

router.get('/movies/:id/delete', (req, res, next) => {
  console.log(req.params)
  Movie.findByIdAndRemove(req.params.id)
    .then((data) => {
      res.redirect('/movies/index')

    })
    .catch(next)
})

router.get('/movies/:id', (req, res, next) => {
  console.log(req.params.id)
  let id1 = req.params.id
  Movie.findById(id1)
    .then((data) => {
      res.render('movies/show', {
        movies: data
      })
    })
    .catch(next)

})


module.exports = router
