const Movie = require('../models/Movie.model')

// CREATE
// Get form
module.exports.create = (req, res, next) => res.render('movies/movieForm');

// Post form
module.exports.doCreate = (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save()
        .then(movie => {
            res.redirect('/movies')
            console.log(`The movie ${movie.title} was added`);
        })
        .catch(() => {
            console.log(`An error occurred while creating the new celebrity: ${err}`)
            res.redirect('/movie/movieForm')
        });
}

// READ - list
module.exports.list = (req, res, next) => {
    Movie.find()
        .then(moviesFound => res.render('movies/index', {
            movies: moviesFound
        }))
        .catch(err => next(err))
}

module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movieFound => res.render('movies/show', movieFound))
        .catch(err => next(err));
}

// UPDATE
// Get form
module.exports.edit = (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movieToEdit => res.render('movies/movieForm', movieToEdit))
        .catch(err => next(err));
}

// Post form
module.exports.doEdit = (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(() => res.redirect('/movies'))
        .catch(err => next(err));
}

// DELETE 
module.exports.delete = (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(err => next(err));
}