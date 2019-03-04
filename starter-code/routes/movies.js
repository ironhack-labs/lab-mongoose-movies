const express = require("express");
const Router = express.Router();

const Movie = require('../models/Movie')


Router.get("/", (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render("movies/index", {movies});
  })
  .catch(err => {
      console.log('Error while finding all movies', err)
      next()
  })
})

Router.post("/", (req, res, next) => {
    const {title, genre, plot} = req.body
    const newMovie = new Movie({title, genre, plot}) 
    
    newMovie.save()
    .then(newMovie  => res.redirect('/movies'))
    .catch(error      => {
        console.log(`Error saving new movie: ${error}`)
        res.render("movies/new")
        next()
    })
})

Router.get("/:id", (req, res, next) => {
 
    Movie.findById(req.params.id)
      .then(movie => {
        res.render("movies/show", {movie})
      })
      .catch(err => {
          console.log('Error while finding the movie', err)
          next()
      })
  })

  Router.post("/:id", (req, res, next) => {
    const {title, genre, plot} = req.body
    Movie.update({_id: req.params.id},  { $set: {title, genre, plot}})
    .then(movie    => res.redirect('/movies'))
    .catch(err => {
      console.log('Error while updating a movie', err)
      next()
    })
  })

  Router.post("/:id/delete", (req, res, next) => {
 
    Movie.findByIdAndRemove(req.params.id)
      .then(movie => {
        console.log("He borrado la movie " +  movie)
        res.redirect("/movies")
      })
      .catch(err => {
          console.log('Error while deleting a movie', err)
          next()
      })
  })

  Router.post("/:id/edit", (req, res, next) => {
 
    Movie.findById(req.params.id)
      .then(movie => {
        res.render("movies/edit", {movie})
      })
      .catch(err => {
          console.log('Error while finding a movie to edit', err)
          next()
      })
  })

  Router.get("/new", (req, res, next) => {
    res.render("movies/new")
})


module.exports = Router;