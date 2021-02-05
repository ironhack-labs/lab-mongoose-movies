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