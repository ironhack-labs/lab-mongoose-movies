const express = require('express');
const { post } = require('.');
const router  = express.Router();
const { getMovies,showMovieForm,createMovie,getDetails,deleteMovie,showMovieUpdate,updateMovie } = require("../controllers/movies.controller")

router
.get("/", getMovies)
.get("/new", showMovieForm)
.post("/new", createMovie)
.get("/:movieId", getDetails)
.post('/:movieId/delete', deleteMovie)
.get('/:movieId/edit', showMovieUpdate)
.post('/:movieId', updateMovie)

module.exports = router; 