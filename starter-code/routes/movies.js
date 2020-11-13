const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.model");

router.get("/movie-list", (req, res, next) =>{
    Movie.find()
    .then(allMoviesFromDB =>{
        res.render("./movies/movie-list.hbs", {movies: allMoviesFromDB});})
        .catch((error) => {
            next(error);
          });
})

module.exports = router