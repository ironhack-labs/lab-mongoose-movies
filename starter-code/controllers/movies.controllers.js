const Movie = require('../models/Movie')

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find()
    console.log('show me the movies documents!!!',movies)
    res.render('movies', {movies})
  } catch (err) {
    console.log('Error in getMovies !!!!', err)
  }
}

const getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findById(id)
    console.log('show me the movie with the ID I gave you!!!', movie)
    res.render('movieDetails', movie)
  } catch (err) {
    console.log('Error in getMovieDetails !!!!', err)
  }
}

const newMovieView = async (req, res) => {
  try {
    res.render('newMovie')
  } catch (err) {
    console.log('Error in newMovieView !!!!', err)
  }
}

const createMovie = async (req, res) => {
  try {
    const newMovieData = req.body
    const newMovie = await Movie.create(newMovieData)
    console.log('newMovie looks like this:', newMovie)
    res.redirect('/movies')
  } catch (err) {
    console.log('Error in createMovie !!!!', err)
  }
}

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params
    await Movie.findByIdAndRemove(id)
    const movies = await Movie.find()
    console.log('show me the movies documents!!!', movies)
    res.render('movies', {movies})
  } catch (err) {
    console.log('Error in deleteMovie !!!!', err)
  }
}

const editMovieView = async (req, res) => {
  try {
    const { id } = req.params
    const movieToEdit = await Movie.findById(id)
    res.render('editMovie', movieToEdit)
  } catch (err) {
    console.log('Error in editMovieView !!!!', err)
  }
}

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params
    const editionData = req.body
    console.log('esto es el req.body !!!', editionData)
    await Movie.findByIdAndUpdate(id, editionData, { new: true })
    res.redirect('/movies')
  } catch (err) {
    console.log('Error in updateMovie !!!!', err)
  }
}

module.exports = {
  getMovies,
  getMovieDetails,
  newMovieView,
  createMovie,
  deleteMovie,
  editMovieView,
  updateMovie
}