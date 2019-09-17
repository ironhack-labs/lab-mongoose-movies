const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js')
const Celebrities = require('../models/Celebrity')

router.get('/', (req, res, next) => {

  Movie.find().then(data => {
    res.render('movies/index', {movies: data})
  }).catch(err => next(err))
})

router.get("/details/:id", (req,res,next) => {
  let id = req.params.id
  console.log("=-=-=-=-==", req.params)
  Movie.findById(id).populate("actors").then(data => {
    res.render('movies/details', {movie: data})
  })
})

router.get("/new", (req,res,next) => {
  Celebrities.find().then(data => {
    res.render("movies/new", {actors: data})
  })
})

router.post("/create", (req,res,next) => {
  let movie = {
    title: req.body.title,
    genre: req.body.title,
    plot: req.body.plot,
    image: req.body.image,
    actors: req.body.actors
  }

  Movie.create(movie).then(data => {


    res.redirect(`/movies/details/${data.id}`)
  })
})

router.post("/delete/:id", (req,res,next) => {
  let id = req.params.id

  Movie.findByIdAndDelete(id).then(() => {
    res.redirect("/movies")
  })
})

router.get("/edit/:id", (req,res,next) => {
  let id = req.params.id

  Movie.findById(id).then(data => {
    res.render("movies/edit", {movie: data})
  })
})


router.post('/update/:id', (req,res,next) => {
  let id = req.params.id
  let title = req.body.title
  let genre = req.body.genre
  let plot = req.body.plot
  let image = req.body.image
  let actors = req.body.actors

  Movie.findByIdAndUpdate(id, {
    title: title,
    genre: genre,
    plot: plot,
    image: image,
    actors: actors
  }).then(data => {
    res.redirect("/movies")
  }).catch(err => next(err))
})


module.exports = router;