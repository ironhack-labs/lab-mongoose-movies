const Movie = require('../models/Movie.model')
const Celebrity = require('../models/Celebrity.model')
const mongoose = require('mongoose');

module.exports.list = ((req, res, next) => {
    Movie
        .find()
        .populate("stars") // -> en la vista me debería coger celebrity.name
        .then((m) => {
            if(m){
                res.render('movies/listMovies', { m })
            } else {
                next()
            }
        })
        .catch(e => next(e))
})

module.exports.detail = ((req, res, next) => {
    Movie
        .findById(req.params.id)
        .populate("stars")
        .then((m) => {
            if(m){
                res.render('movies/detailMovie', { m })
            } else {
                next()
            }
        })
        .catch(e => next(e))
})

module.exports.createView = ((req, res, next) => {
    Celebrity
        .find()
        .then(celebs => {
            res.render('movies/create-movie', { celebs })
        })
        .catch(e => next(e))
})

module.exports.create = ((req, res, next) => {
    Movie
    .create(req.body)
    .then((m) => {
        res.redirect('../movies')
    })
    .catch(e => next(e))
})

module.exports.editView = ((req, res, next) => {
    Movie
        .findById(req.params.id)
        .then((m) => {
            res.render('movies/update-movie', { m })
        })
        .catch((e) => next(e))
})

module.exports.edit = ((req, res, next) => {
    Movie
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.redirect('../../movies'))
    .catch((e) => next(e))
})

module.exports.delete = ((req, res, next) => {
    Movie
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('../../movies'))
    .catch(e => next(e))
})