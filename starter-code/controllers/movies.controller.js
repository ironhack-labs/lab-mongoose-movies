const Movie = require('../models/movie.model');

module.exports.list = (req, res, next) => {
    Movie.find()
        .then(movie => {
            console.log(movie);
            res.render('movies/index', { movie });
        })
        .catch(next)
}