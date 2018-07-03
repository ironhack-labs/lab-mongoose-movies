const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

module.exports.list = (req, res, next) => {
    Movie.find()
        .then(movies => {
            res.render('movies/index', {
                movies
            });
        })
        .catch(error => {
            next(error);
        })
}

module.exports.get = (req, res, next) => {
    const id = req.params.id;
    Movie.findById(id)
        .then(movie => {
            res.render('movies/detail', {
                movie
            });
        })
        .catch(error => {
            next(error);
        })
}

module.exports.new = (req, res ,next) => {
    res.render('movies/new');
}

module.exports.newMovie = (req, res ,next) => {
    const movie = new Movie(req.body);
    movie.save()
        .then(() => {
            res.redirect('/movies');
        })
        .catch(() => {
            res.render('movies/new');
        })
}

module.exports.delete = (req, res, next) => {
    const id = req.params.id;
    Movie.findByIdAndRemove(id)
        .then(() => {
            res.redirect('/movies');
        })
        .catch(error => {
            next(error);
        })
}

module.exports.edit = (req, res, next) => {
    const id = req.params.id;
    Movie.findById(id)
        .then(movie =>{
            res.render('movies/edit', {
                movie
            });
        })
        .catch(error => next(error))
   
}

module.exports.editMovie = (req, res, next) => {
    //const movie = req.body;
    const id = req.params.id;
    Movie.findByIdAndUpdate(id, req.body)
        .then(() => {
            res.redirect('/movies');
        })
        .catch(() => {
            res.render('movies/edit');
        })
}