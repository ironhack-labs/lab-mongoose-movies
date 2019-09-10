const Movie = require('../models/Movie')

exports.movieshome = async(req, res, next)=>{
  const movies = await Movie.find()
  console.log(movies)
  res.render('movies', {movies})
}

exports.movieDetails = async(req, res, next) => {
  const {id} = req.params
  const details = await Movie.findById(id)
  console.log(details)
  res.render('movie-details', details)
}

exports.deleteMovie = async(req, res) => {
  const {id} = req.params
  await Movie.findByIdAndDelete(id)
  res.redirect('/movies')
  
}

exports.createMovieForm = async(req,res)=>{
  const movies = await Movie.find()
  res.render('create-movie', {movies})
}

exports.createMovie = async(req, res) => {
  const {title, genre, plot} = req.body
  await Movie.create({title, genre, plot})
  res.redirect('/movies')
}

exports.updateMovieForm = async (req, res) => {
  const {moviesid} = req.query
  const movie = await Movie.findById(moviesid)
  res.render('update-movie', movie)
  }
  
  exports.updateMovie= async(req, res) => {
    const {title, genre, plot} = req.body
    const {moviesid} =req.query 
    await Movie.findByIdAndUpdate(moviesid, {title, genre, plot})
    res.redirect('/movies')
  }

