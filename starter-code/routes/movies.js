const Movie = require('../models/Movies');


module.exports = {
    index: function(req, res) {
        Movie.find({})
            .then(movies => {
                console.log(movies)
                res.render('movies/index', { movies: movies });
            })
            .catch(error => console.log(error))
    },

    moviesInfo: function(req, res) {
        let { id } = req.params;

        Movie.findById(id)
            .then(movie => {
                res.render('movies/show', {
                    movie
                })
            })
            .catch(error => console.log(error))

    },

    addMovie: function(req, res, next) {
        return res.render('movies/new');
    },

    createMovie: function(req, res) {
        let {
            title,
            genre,
            plot
        } = req.body;

        Movie.create({
            title,
            genre,
            plot
        }).then(() => {
            res.redirect('/movies');
        })
    },

    deleteMovie: function(req, res) {
        let { id } = req.params;

        Movie.findByIdAndRemove(id)
            .then(response => {
                console.log(response)
                res.redirect('/movies')
            })
            .catch(error => console.log(error))

    },

    editMovie: function(req, res) {
        let { id } = req.params;
        Movie.findById(id).then(response => {
            res.render('movies/edit', { movies: response })
        });
    },

    saveMovie: function(req, res) {
        let {
            id,
            title,
            genre,
            plot
        } = req.body;

        Movie.findByIdAndUpdate(id, {
            $set: {
                title,
                genre,
                plot
            }
        }).then(() => {
            res.redirect('/movies')
        })
    }
}