//require mongoose
const express = require('express');

//require express
const router = express.Router();
const movieRoutes = express.Router();

//require model(s)
const Movie = require('../models/movie-model')

//display all the movies
movieRoutes.get('/movies', (req, res, nex)=>{
    Movie.find({}, (err, moviesFromDb) => {
        if(err){
            next(err);
            return;
        }
        res.render('movies/movies-view',{
            movies: moviesFromDb,
            title: "My movies"
        });
    });
});



module.exports = movieRoutes;