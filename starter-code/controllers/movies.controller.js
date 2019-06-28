const Movie= require('../models/Movie')

exports.findMovies=(req,res,nex)=>{
  Movie.find()
    .then(movies=>res.render('movies/all',{movies}))
    .catch(err=> res.render('movies/all',err))
} 