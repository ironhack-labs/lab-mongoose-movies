const express = require("express");
const Router = express.Router();

const Movie = require('../models/Movie')

Router.get("/", (req, res) => {
  Movie.find()
  .then(movies   => res.render("movies/index", {movies}) )
  .catch(err    => next(err))
})

Router.get("/details/:id", (req, res) => {
  console.log(req.params.id)
  Movie.findById(req.params.id)
  .then(movie   => {
    res.render("movies/show", {movie}) 
  })
  .catch(err    => next(err))
})


Router.post("/details/:id/delete", (req, res) => {
  Movie.findByIdAndRemove(req.params.id)
  .then(movie   => {
    console.log(movie)
    res.redirect('/movies') 
  })
  .catch(err    => next(err))
})




Router.get("/new", (req, res) => {
  console.log("working")
  res.render("movies/new")
})

Router.post('/new', (req, res) => {

  const {title, genre, plot} = req.body
  const movie = new Movie({title, genre, plot})

  movie.save()
    .then(()  => res.redirect('/movies'))
    .catch(error      => res.redirect('/movies/new'))
})


Router.get("/details/:id/edit", (req, res) => {
  Movie.findById(req.params.id)
  .then(movie   => {
    res.render("movies/edit", {movie}) 
  })
  .catch(err    => next(err))
})

Router.post("/details/:id", (req, res) => {
  const {title, genre, plot} = req.body
  console.log(req.params.id)

  Movie.updateOne({_id: req.params.id}, { $set: {title, genre, plot}})
  .then(()    => res.redirect('/movies'))
  .catch(err  => next(err))
})

module.exports = Router