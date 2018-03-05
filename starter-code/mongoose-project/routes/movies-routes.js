//require mongoose
const mongoose = require("mongoose");

//require express
const express = require("express");
const movieRoutes = express.Router();

//require model(s)
const Movie = require("../models/movie-model");

// display all movies

movieRoutes.get("/movies", (req, res, next) => {
    Movie.find({}, (err, moviesFromDb) => {
        if(err){
            next(err);
            return;
        }
        res.render("movies/movies-view", {
            movies: moviesFromDb,
            title: "My movies"
        });
    });
});

movieRoutes.get("/movies/new", (req, res, next) => {
res.render("movies/new-movie");
})

movieRoutes.post("/movies/new", (req, res, next) => {

    const newMovie = new Movie({
        name: req.body.movieName,
        genre: req.body.movieGenre,
        plot: req.body.moviePlot
    });
    newMovie.save(err => {
        if(err){
            res.render("movies/new-movie", {
                errorMessage: "Please add the name of the movie"
            });
        }
    })
});

//details
movieRoutes.get("movies/:id", (req, res, next) => {
    const movieId = req.params.id;
    Movie.findById(movieId, (err, theMovie) => {
        if(err) {
            next(err);
            return;
        }
        res.render("movies/movies-details", {
            movie: theMovie,
            title: theMovie.name
        });
    });
});

module.exports = movieRoutes;