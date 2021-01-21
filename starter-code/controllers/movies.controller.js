const Movie = require('../models/movie.model');

module.exports.list = (req, res, next) => {
    Movie.find()
        .then(movie => {
            console.log(movie);
            res.render('movies/index', { movie });
        })
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    const { id } = req.params;
    Movie.findOne({ _id: id })
        .then(movie => {
            res.render('movies/show', { movie })
        })
        .catch(next)
}