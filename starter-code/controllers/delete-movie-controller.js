const Movie = require('../models/Movie')

exports.deleteMovie = async (req,res,next) => {
  const {movieid} = req.params
  const celeb = await Movie.findByIdAndRemove(movieid) 
  res.redirect('/movies-list')
}