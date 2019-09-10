const Movie = require('../models/Movie')
const Celebrity = require('../models/Celebrity')

exports.home = async (req, res, next) => {
	const movies = await Movie.find()
	res.render('index', { movies })
}

exports.home = async (req, res, next) => {
	const celebrities = await Celebrity.find()
	res.render('index', { celebrities })
}

//Celebrities
exports.celebrities = async (req, res, next) => {
	const celebrities = await Celebrity.find()
	res.render('celebrities/all', { celebrities })
}

exports.celebrityDetail = async (req, res, next) => {
  const { id } = req.params
  const celebrities = await Celebrity.findById(id)
  res.render('celebrities/detail', celebrities)
}

exports.addCelebrityForm = async (req, res, next) => {
	const celebrities = await Celebrity.find()
	res.render('celebrities/add', { celebrities })
}

exports.addCelebrity = async (req, res) => {
	const { name, occupation, catchPhrase  } = req.body
	await Celebrity.create({ name, occupation, catchPhrase })
	res.redirect('/celebrities/all')
}

exports.deleteCelebrity = async (req, res) => {
  const { id } = req.params
	const celebrity = await Celebrity.findByIdAndRemove(id)
	res.redirect('/celebrities/all')
}

exports.editCelebrityForm = async (req, res) => {
	const { celebrityid } = req.query
	const celebrity = await Celebrity.findById(celebrityid)
	res.render('celebrities/edit', celebrity)
}

exports.editCelebrity = async (req, res) => {
	const { name, occupation, catchPhrase } = req.body
	const { celebrityid } = req.query
	await	Celebrity.findByIdAndUpdate(celebrityid, { name, occupation, catchPhrase })
	res.redirect(`/celebrities/detail/${celebrityid}`)
}

//Movies
exports.movies = async (req, res, next) => {
	const movies = await Movie.find()
	res.render('movies/all', { movies })
}

exports.movieDetail = async (req, res, next) => {
  const { id } = req.params
  const movies = await Movie.findById(id)
  res.render('movies/detail', movies)
}

exports.addMovieForm = async (req, res, next) => {
	const movies = await Movie.find()
	res.render('movies/add', { movies })
}

exports.addMovie = async (req, res) => {
	const {title, genre, plot  } = req.body
	await Movie.create({ title, genre, plot })
	res.redirect('/movies/all')
}

exports.deleteMovie = async (req, res) => {
  const { id } = req.params
	const movie = await Movie.findByIdAndRemove(id)
	res.redirect('/movies/all')
}

exports.editMovieForm = async (req, res) => {
	const { movieid } = req.query
	const movie = await Movie.findById(movieid)
	res.render('movies/edit', movie)
}

exports.editMovie = async (req, res) => {
	const { title, genre, plot } = req.body
	const { movieid } = req.query
	await	Movie.findByIdAndUpdate(movieid, { title, genre, plot })
	res.redirect(`/movies/detail/${movieid}`)
}