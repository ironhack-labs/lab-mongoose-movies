const Movie = require('../models/Movie')

exports.movieView = async (req, res) => {
  const movie = await Movie.find({}).sort({ title: 1 })
  res.render('movies/movies', { movie })
}

exports.movieDetail = async (req, res) => {
  const movieDet = await Movie.findById(req.params.id)
  res.render('movies/moviesDetail', movieDet)
}

exports.newMovie = (req, res) => {
  res.render('movies/movienew')
}

exports.newMovieProcess = async (req, res) => {
  const { title, genre, plot } = req.body

  await Movie.create({
    title,
    genre,
    plot,
  })

  res.redirect('/movie')
}

exports.movieDelete = async (req, res) => {
  const borrar = req.params.id
  await Movie.findByIdAndRemove(borrar)
  console.log(borrar)
  res.redirect('/movie')
}

exports.editMovieGet = async (req, res) => {
  const edit = req.params.id
  const mov = await Movie.findById(edit)
  res.render('movies/movieedit', mov)
}

exports.editMoviePost = async (req, res) => {
  const edit = req.params.id
  console.log(edit)
  await Movie.findByIdAndUpdate(edit, { $set: { ...req.body } }, { new: true })
  res.redirect(`/movie/${edit}`)
}
