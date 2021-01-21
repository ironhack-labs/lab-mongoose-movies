const Movie = require('../models/movies.model')

require('../config/db.config')

module.exports.list = (req, res, next ) => {
  Movie.find()
    .then(movies =>{
      res.render('movies/movies', {movies})
    })
    .catch(err => console.error(err))
}

module.exports.detail = (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movie => {
      console.log(movie);
      res.render('movies/movie-detail', {movie});
    })
    .catch(err => {
      console.log(err); 
      next();
    })
}

module.exports.register = (req, res, next) =>{
  res.render('movies/new-movie')
}

module.exports.create = (req, res, next) => {
  Movie.create(req.body)
    .then(movie => {
      res.redirect('movies')
    })
    .catch(err => console.error(err))
}

module.exports.delete = (req, res, next) => {
  const {id} = req.params
  Movie.findByIdAndDelete(id)
    .then(foo => {
      console.log('pelicula eliminada');
      res.redirect('movies'); 
    })
    .catch(err => console.error(err))
}

module.exports.edit = (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movie => {
      if (movie) {
        res.render('movies/edit-movie', { movie })
      } else {
        next(createError(404, 'Movie does not exists'))
      }
    })

    .catch(err => {
      console.error(err);
      res.redirect('movies')
    })
}

module.exports.update = (req, res, next) => {
  const { id } = req.params
  Movie.findByIdAndUpdate(id, { $set: req.body })
    .then(movie => res.redirect(`movies`), { movie })
    .catch(err => console.error(err), next)
}