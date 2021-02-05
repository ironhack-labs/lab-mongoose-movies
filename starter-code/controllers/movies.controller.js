const Movie = require("../models/movie.model")

//Movies list 
module.exports.list = (req, res, next) => {
    Movie.find()
    .then((foundMovie) => {
        res.render('movies/index', {movies: foundMovie})})
    .catch((e) => next(e));
}

//Movies detail

module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.id)
    .then((foundMovie) => {
        res.render('movies/show', {movies: foundMovie})
    })
    .catch((e) => next(e));
}

//New movie

//Create a new movie

//get
module.exports.new = (req, res, next) => {
    res.render('movies/new')
}

//post
module.exports.doNew = (req, res, next) => {

    const {title, genre, plot} = req.body;

    const newMovie= new Movie({title, genre, plot})

    newMovie
    .save()
    .then(() => {
        console.log('Movie added')
        res.redirect('/movies') 
    })
    .catch(() => {
        console.log('Error adding the movie')
        res.redirect('/movies/new')
    })
}   
//Edit a movie

module.exports.edit = (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movieToEdit) => {
        res.render('movies/edit', {movies: movieToEdit})
    })
    .catch((e) => next(e))
  }

  module.exports.doEdit = (req, res, next) => {
    const {title, genre, plot} = req.body

    Movie.findByIdAndUpdate(req.params.id, {title, genre, plot}, {new: true})
    .then((editedMovie) => {
      console.log(`The movie has been updated sucessfully`)
      res.redirect('/movies')
    })
    .catch((e) => next(e))
  }

//Delete

module.exports.delete = (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log(`The movie was deleted succesfully`)
      res.redirect('/movies')
    })
    .catch((e) => next (e))
}

