const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

module.exports.list = (req, res, next) => {
    Movie.find()
        .then(movies =>{                //Por qué entre corchetes?
            res.render('movies', { movies })
        })
        .catch(error => {
            next(error);
        })
}

module.exports.detail = (req, res, next) => {
    let id = req.params.id;
    Movie.findById(id)
        .then((movie) => {
            res.render('movies/detail', { movie })
        })
        .catch(error => {
            next(error);
        })
    }

module.exports.create = (req, res, next) => {
    res.render('movies/create', {movie : new Movie()}) //no termino de entender por qué pasamos esto así
}

module.exports.doCreate = (req, res, next) => {
    const movie = new Movie(req.body);
    movie.save()
        .then(
            res.redirect('/movies')//todos los redirect están escachuflados
        )
        .catch(error => {
            next(error);
        })
}

module.exports.delete = (req, res, next) => {
    let id = req.params.id;

    Movie.findByIdAndRemove(id)
        .then(
            res.redirect('/movies')
        )
        .catch(error => {
            next(error);
        });
}

module.exports.update = (req, res, next) => {
    let id = req.params.id;
    Movie.findById(id)
        .then(movie => {
            res.render('movies/update', { movie })
        })
        .catch(error => {
            next(error);
        });
}

module.exports.doUpdate = (req, res, next) => {
    let id = req.params.id;
    Movie.findByIdAndUpdate(id)
        .then(movie => {
            Object.assign(movie, req.body);
            movie.save()
                .then(
                    res.redirect(`/movies/${id}`)
                )
                .catch(error => {
                    next(error);
                })
        })
        .catch(error => {
            next(error);
        })
}