const express = require('express');
const Router  = express.Router();

const Movie = require("../models/Movies")

Router.get("/", (req, res, next) => {
  Movie.find()
  .then (movie => res.render("movies/index", {movie}))
  .catch (err        => next(err))
})

Router.get("/new", (req,res,next) => res.render("movies/new"))

Router.post("/new", (req, res) => {
  const {title, genre, plot } = req.body
  const newMovie = new Movie ({ title, genre, plot})
  newMovie.save()
    .then(movie => res.redirect('/movies'))
    .catch(err => console.log(`The movie wasn't created ${err}`))
})

Router.post("/:id/delete", (req, res, next) => {
  console.log(req.params.id)
  Movie.findByIdAndDelete(req.params.id)
  .then(movie => res.redirect("/movies"))
  .catch(err => next(err))
})

Router.get("/:movieId", (req,res,next) => {
  Movie.findById(req.params.movieId)
  .then (movie => {
      res.render("movies/show", {movie})})
      .catch(err => next(err))
})


module.exports = Router