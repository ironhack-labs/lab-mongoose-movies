const express = require('express');
const router = express.Router();
const movieModel = require("../models/movies")

// find id's

router.get('/', (req, res, next) => {
    movieModel.find()
        .then(movies => {
            res.render('movies/index.hbs', {
                movies: movies
            });
        })
        .catch(error => {
            console.log('Error', error);
        })
});

// display info of the movies

router.get('/:id/mov', (req, res, next) => {
    movieModel.findById(req.params.id)
        .then(movie => {
            res.render('movies/movie', {
                movie: movie
            });
        })
        .catch(error => {
            console.log('Error', error);
        })
});

// create movies

router.get("/newmovie", (req, res) => {
    res.render("movies/newmovie");
});

router.post('/newmovie', (req, res, next) => {
    const {
        title,
        genre,
        plot,} = req.body;
    movieModel
        .create({
            title,
            genre,
            plot,
        })
        .then((movi) => {
            res.redirect('/movies');
        })
        .catch((error) => {
            console.log(error);
            res.send("Oh no, an error ocurred while creating new movie !");
        })
});

//delete movies

router.post("/:id/mov/delete", (req, res) => {
    movieModel
        .findByIdAndDelete(req.params.id)
        .then(dbRes => {
            res.redirect("/movies");
        })
        .catch(dbErr => {
            res.redirect("/movies");
        });
});


module.exports = router;