const Movie = require('../models/Movie')

exports.createMoviePage = async (req, res, next) => {
  const movies = await Movie.find()
  .then((movies) => {
    res.render('movies', {movies})
  })
  .catch((err) => {
    console.log(`está entrando a error ${err}`)
    next()
  })
}

exports.createMovieDetailPage = async (req, res, next) => {
  const movieid = req.params.id
  const movie = await Movie.findById({_id: movieid})
  .then(movie => {
    res.render('movies/show', movie)
  })
  .catch((err) => {
    console.log(`está entrando a error ${err}`)
    next()
  })
}

exports.createMovieForm = (req, res, next) => {
  res.render('movies/new')
}

exports.createMovie = (req, res, next) => {
  const newObject = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }

  const modelInstance = new Movie(newObject)
  modelInstance.save()
  .then( () => {
    res.redirect('/movies/')
  })
  .catch((err) => {
    console.log('well this was a mistake')
    res.redirect('/movies/new')
  })
}

exports.deleteMovie = async (req, res, next) => {
  const movieid = req.params.id
  const movie = await Movie.findByIdAndRemove({_id: movieid})
  .then(movie => {
    console.log(`yas`)
    res.redirect('/movies')
  })
  .catch((err) => {
    console.log(`está entrando a error ${err}`)
    next()
  })
}