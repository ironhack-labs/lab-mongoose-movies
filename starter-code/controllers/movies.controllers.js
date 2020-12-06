const Movies = require('../models/movies')

const getMovies = async (req, res) => {
  try {
    const movies = await Movies.find()
    console.log('MOVIES:', movies)
    //res.send('hellooo')
    res.render('movies.hbs', {movies})
  } catch (err) {
    res.send(err)
  }
}

const getMovie = async (req, res) => {
  try {
    const {movieId} = req.params
    console.log("MOVIEID", movieId)
    const movie = await Movies.findById(movieId)
    res.render('movie-detail', movie)
  } catch (err) {
    res.send(err)
  }
}

const newMovie = async (req, res) => {
  try {
    res.render('new-movie')
  } catch (err) {
    res.send(err)
  }
}

const createMovie = async (req, res) => {
  try {
    const newMovie =req.body
    console.log("NEWMOVIE", newMovie)
    await Movies.create(newMovie)
    res.redirect('/movies')
  } catch (err) {
    res.send(err)
  }
}

const deleteMovie = async (req, res) => {
  try {
    const {movieId} = req.params
    console.log("movieid:", movieId)
    const deletedMovie = await Movies.findByIdAndDelete(movieId)
    res.redirect('/movies')
  } catch (err) {
    res.send(err)
  }
}

const editMovie = async (req, res) => {
  try {
    const {movieId} = req.params
    console.log("movieID:", movieId)
    const updatedInfoMovie = req.body
    console.log("updatedMovie:", updatedInfoMovie)
    const updatedMovie = await Movies.findByIdAndUpdate(movieId, updatedInfoMovie, {new: true})
    res.render('movie-detail', updatedMovie)
  } catch (err) {
    res.send(err)
  }
}

module.exports = {
  getMovies,
  getMovie,
  newMovie,
  createMovie, 
  deleteMovie,
  editMovie
}
