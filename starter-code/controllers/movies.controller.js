const Movie = require('../models/movies.model');

module.exports.index = (req, res, next) => {
    Movie.find({}).then( (movies) => {
        res.render('index');
    });
};

module.exports.indexMovies = (req, res, next) => {
    Movie.find({}).then( (movies) => {
        res.render('movies/index', {
            movies: movies
        }).catch( (error) => {
            next.send(error);
        });
    });
};

module.exports.movieDetails = (req, res, next) => {
    console.log(req.params.id);
    Movie.findOne({_id: req.params.id})
        .then((movie) => {
            res.render('movies/show', {
                movie: movie
            });
        })
        .catch((error) => {
            next(error);
        })
}

module.exports.new = (req, res, next) => {
    res.render('movies/form', {
        movie: new Movie()
    });
};

module.exports.doNew = (req, res, next) => {
    const newMovie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    });
    newMovie.save()
        .then(res.redirect('/movies'))
        .catch((error) => next(error))
};

module.exports.delete = (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(res.redirect('/movies'))
        .catch((error) => next(error));
};

module.exports.edit = (req, res, next) => {
    Movie.findById(req.params.id)
        .then((movie) => {
            res.render('movies/form', {
                movie: movie
            })
        })
        .catch((error) => next(error));
};

module.exports.doEdit = (req, res, next) => {
    const update = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    };
    Movie.findByIdAndUpdate(req.params.id, update)
        .then(res.redirect('/movies'))
        .catch((error) => next(error));
};