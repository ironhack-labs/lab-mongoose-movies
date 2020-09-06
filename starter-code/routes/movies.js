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

router.get("/movies", listMovies)

router.get("/movies/:movieID", movieDetails)

router.get("/movies/new", formMovie)

router.post("/movies", createMovie)

router.post("/movies/delete/:movieID", deleteMovie)

router.get("/movies/edit/:movieID", updateForm)

router.post("/movies/:movieID", updateMovie)


module.exports = router