Movie = require('../models/movie');

exports.getAllMovies = (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            res.render('movies/index', {
                movies: allMovies
            });
        }).catch(error => {
            next(error);
        });
};

exports.createMovie = (req, res, next) => {
    const {
        title,
        genre,
        plot
    } = req.body;
    const newMovie = new Movie({
        title,
        genre,
        plot
    });
    newMovie.save()
        .then((celebrity) => {
            res.redirect('/movies');
        })
        .catch((error) => {
            res.redirect('/new');
        });
};

exports.addDetails = (req, res, next) => {
    res.render('movies/new');
};

exports.updateMovie = (req, res, next) => {
    const updateFields = {
        title,
        genre,
        plot
    } = req.body;
    Movie.update({
            _id: req.params.id
        }, updateFields)
        .then((movie) => {
            res.redirect('/movies');
        })
        .catch((error) => {
            next(error);
        });
};

exports.deleteMovie = (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
        .then((movie) => {
            res.redirect('/movies');
        })
        .catch((error) => {
            next(error);
        });
};

exports.editDetails = (req, res, next) => {
    Movie.findById(req.params.id)
        .then(theMovie => {
            res.render('movies/edit', {
                theMovie
            });
        }).catch(error => {
            next(error);
        });
};

exports.detailsMovie =  (req, res, next) => {
    Movie.findById(req.params.id)
        .then(theMovie => {
            res.render('movies/show', {
                theMovie
            });
        }).catch(error => {
            next(error);
        });
};