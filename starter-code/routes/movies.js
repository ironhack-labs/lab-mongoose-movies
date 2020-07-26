//IT 7
const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

//IT 8
router.get('/', (req, res, next) => {
    Movie.find()
        .then(allMoviesFromDB => {
            //console.log(`${allMoviesFromDB}, movies.js`)
            res.render('movies/index.hbs', {
                movies: allMoviesFromDB
            })
        })
        .catch((err) => {
            console.log('Error while displaying the celebs, movies.js', err)
            next(err)
        })
});
//IT 10 Get que renderiza las nuevas movies
router.get('/new', (req, res, next) => {
    res.render('movies/new')
})
//IT 10 Post que guarda la info en la DB y redirige a /movies
router.post('/new', (req, res, next) => {
    //Cojo la info del form con req.body y la guardo en 3 constantes.
    const {
        title,
        genre,
        plot
    } = req.body;
    //Paso esas 3 constantes como argumentos al modelo de Celebrity y creo una nueva.
    //La guardo en una variable.
    const newMovie = new Movie({
        title,
        genre,
        plot
    })
    newMovie
        .save()
        .then((newMov) => {
            res.redirect('/movies');
        })
        .catch((err) => {
            console.log('Error while creating a new movie', err)
            res.render('movies/new')
        })
});

//IT 9 - more info
router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(thisMovieDB => {
            console.log(`${thisMovieDB}, movies.js`)
            res.render('movies/show.hbs', {
                thisMovie: thisMovieDB
            })
        })
        .catch((err) => {
            console.log('Error while displaying info about the movie', err);
            next(err);
        })
});

//IT 11 - delete a movie

router.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(thisMovieDB => {
            res.redirect('/movies')
        })
        .catch((err) => console.log('Error while deleting a movie', err))
});

//IT 12 - edit a movie
//GET route to show a form to edit
router.get('/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(thisMovieDB => {
            res.render('movies/edit', {
                thisMovie: thisMovieDB
            })
        })
        .catch((err) => {
            console.log('Error while getting edit.hbs', err)
            next(err)
        })
});

//POST route to send the data from the form and save it to the database
router.post('/:id', (req, res, next) => {
    const movieId = req.params.id
    const body = req.body
    const updatedMovie = {
        title: body.title,
        genre: body.genre,
        plot: body.plot
    }
    Movie.findByIdAndUpdate(movieId, updatedMovie)
        .then(() => {
            res.redirect('/movies')
        })
        .catch((err) => {
            console.log('Error while updating a movie from IT 12', err)
            next(err)
        })
})

module.exports = router;