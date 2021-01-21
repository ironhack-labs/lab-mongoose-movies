const mongoose = require('mongoose');
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

module.exports.create = (req, res, next) => {
    res.render('movies/new');
}

module.exports.doCreate = (req, res, next) => {
    Movie.create(req.body)
        .then(movie => {
            res.redirect('/movies')
        })
        .catch(error => {
            if (error instanceof mongoose.Error.ValidationError) {
                res.render('movies/new', { 
                    movie: req.body,
                    errors: error.errors
                })
            } else {
                next(error);
            }
        })
}

module.exports.delete = (req, res, next) => {
    const { id } = req.params;
    Movie.findByIdAndDelete(id)
        .then(res.redirect('/movies'))
        .catch(next)
}

module.exports.edit = (req, res, next) => {
    const { id } = req.params;
    Movie.findOne({ _id: id })
        .then(movie => {
            res.render('movies/edit', { movie })
        })
        .catch(next)
}

module.exports.doEdit = (req, res, next) => {
    const { id } = req.params;
    Movie.findByIdAndUpdate(id, { $set: req.body }, { runValidators: true })
        .then(movie => res.redirect('/movies'))
        .catch( error => {
            if (error instanceof mongoose.Error.ValidationError) {
                const movie = req.body;
                movie.id = req.params.id;
                res.render('movies/edit', {
                    errors: error.errors,
                    movie
                })
            } else {
                next(error);
            }
        })
}