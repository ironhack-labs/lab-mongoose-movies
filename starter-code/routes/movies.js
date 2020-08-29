const Movie = require("../models/Movie")
const express = require('express');
const router = express.Router();
const {
    listMovies,
    newMovie,
    newMoviePost,
    updateMovie,
    updateMoviePost,
    detailMovie,
    deleteMovie
} = require('../controllers/movies')

//List
router.get("/movies", listMovies)

//Create

router.get("/movies/add", newMovie)

router.post("/movies/add", newMoviePost)


//Update
router.get("/movies/edit/:movieId", updateMovie);

router.post("/movies/edit/:movieId", updateMoviePost)

//Delete
router.get("/movies/delete/:movieId", deleteMovie)

//Detail
router.get("/movies/detail/:movieId", detailMovie)


module.exports = router