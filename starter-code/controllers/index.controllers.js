const Celebrity = require('./../models/Celebrity')
const Movie = require('./../models/Movie')

//-------- CELEBRITIES

exports.getCelebrities = async (req, res, next) => {
  const celebrities = await Celebrity.find()
  res.render('celebrities/index', { celebrities })
}

exports.getOneCelebritie = async (req, res, next) => {
  const celebritie = await Celebrity.findById(req.params.id)
  res.render('celebrities/show', celebritie)
}

exports.celebritieForm = (req, res, next) => {
  res.render('celebrities/new')
}

exports.createCelebritie = async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body
  await Celebrity.create({ name, occupation, catchPhrase })
  res.redirect('/celebrities')
}

exports.deleteCelebritie = async (req, res, next) => {
  await Celebrity.findByIdAndDelete(req.params.id)
  res.redirect('/celebrities')
}

// ------- MOVIES -------

exports.getMovies = async (req, res, next) => {
  const movies = await Movie.find()
  console.log(movies)
  res.render('movies/index', { movies })
}

exports.getOneMovie = async (req, res, next) => {
  const movie = await Movie.findById(req.params.id)
  res.render('movies/show', movie)
}

exports.movieForm = (req, res, next) => {
  res.render('movies/new')
}

exports.createMovie = async (req, res, next) => {
  const { title, genre, plot } = req.body
  await Movie.create({ title, genre, plot })
  res.redirect('/movies')
}

exports.deleteMovie = async (req, res, next) => {
  await Movie.findByIdAndDelete(req.params.id)
  res.redirect('/movies')
}
