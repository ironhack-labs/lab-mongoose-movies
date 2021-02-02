const Movie = require('../models/Movie.model')
const Celebrity = require('../models/Celebrity.model')

module.exports.list = ((req, res, next) => {
    Movie
        .find({})
        .populate("celebrity") // -> en la vista me debería coger celebrity.name
        .then((m) => {
            res.render('movies/listMovies', { m })
        })
})

module.exports.detail = ((req, res, next) => {
    Movie
        .findById(req.params.id)
        .then((m) => {
            res.render('movies/detailMovie', { m })
        })
})

module.exports.createView = ((req, res, next) => {
    res.render('movies/create-movie')
})

module.exports.create = ((req, res, next) => {
    Movie
    .create(req.body)
    .then((m) => {
        res.redirect('../movies')
    })
})

module.exports.editView = ((req, res, next) => {
    Movie
        .findById(req.params.id)
        .then((m) => {
            res.render('movies/update-movie', { m })
        })
        .catch((e) => console.log(e))
})

module.exports.edit = ((req, res, next) => {
    Movie
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.redirect('../../movies'))
    .catch((e) => console.log(e))
})

module.exports.delete = ((req, res, next) => {
    Movie
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('../../movies'))
})