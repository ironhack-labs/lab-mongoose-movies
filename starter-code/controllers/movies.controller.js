const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

module.exports.list = (req, res, next) => {
    Movie.find()
        .then(movies => {
            res.render('movies/index', { movies })
        })
        .catch(next)
};

module.exports.details = (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => {
            res.render('movies/show', { movie })
        })
        .catch(next);
};

module.exports.new = (req, res, next) => {
    res.render('movies/new');
};

module.exports.create = (req, res, next) => {
    function renderWithErrors(errors) {
        res.status(400).render('movies/new', {
            movie: req.body,
            errors: errors
        });
    }
    Movie.findOne({ title: req.body.title })
        .then(movie => {
            if (movie) {
                renderWithErrors({ title: 'Title already exist'})
            } else {
                return Movie.create(req.body)
                .then(movie => res.redirect('/movies'))
            }
        })
        .catch(error => {
            if (error instanceof mongoose.Error.ValidationError) {
                renderWithErrors(error.errors);
            } else {
                next(error);
            }
        })         
};

module.exports.delete = (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(movie => {
            if (movie) {
                res.redirect('/movies');
            } else {
                next(error);
            }
        })
        .catch(next);
};

module.exports.edit = (req, res, next) => {
    Movie.findById(req.params.id)
        .then((movie) => {
            if (movie) {
                res.render('movies/edit', { movie });
            } else {
                next(error);
            }
        })
        .catch(next);
}

module.exports.doEdit = (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true, new: true})
    .then(movie => {
        if (movie) {
            res.render('movies/show', { movie });
        } else {
            next(error);
        }
    })
    .catch(error => {
        if (error instanceof mongoose.Error.ValidationError) {
            const movie = req.body;
            movie.id = req.params.id;
            res.render('movies/edit', {
                errors: error.errors,
                movie: movie
            });
        } else {
            next(error);
        }
    });
};


