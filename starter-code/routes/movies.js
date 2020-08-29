const express = require('express');
const router = express.Router();
const {
    listMovies,
    movieDetails,
    formMovie,
    createMovie,
    deleteMovie,
    updateForm,
    updateMovie
} = require('../controllers/movies');
const {
    route
} = require('./celebrities');

// View all the movies
router.get("/movies", listMovies)

// View one movie details
router.get("/movies/:movieID", movieDetails)

// View form to create new movie
router.get("/movies/new", formMovie)

// Create new movie in DB
router.post("/movies", createMovie)

// Delete movie from DB
router.post("/movies/delete/:movieID", deleteMovie)

// View for editing movies
router.get("/movies/edit/:movieID", updateForm)

// Edit movie
router.post("/movies/:movieID", updateMovie)


module.exports = router