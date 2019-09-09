const Movie = require('../models/Movie')

exports.createMovie = async(req,res,next) => {
  const {title, genre, plot} = req.body
  const movie = await Movie.create({title,genre,plot})
  res.redirect('/movies-list')

}