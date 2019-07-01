const Movie = require('../models/movie')

exports.findMovies = (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', {movies}) 
    })
    .catch(err =>  {
      res.render('movies/index', err)
    })
} 