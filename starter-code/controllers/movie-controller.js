const Movie = require('../models/Movie')

exports.getMovieInfo = async (req,res) => {
  const {movieid} = req.params
  const movie = await Movie.findById(movieid)
  res.render('movie', {movie})
}
