const express = require('express');
const router = express.Router();
const Movie = require("../models/moviesModel");

router.get('/movies', (req, res, next) => {
    console.log(req.body)
    Movie.find()
        .then(dbMovies => {
            console.log("DB RESPONSE HERE" + dbMovies);
            res.render("movies/index", { movies: dbMovies })
        }
        ).catch(err => {
            next();
            console.log(err)
        })
});

router.get("/movies/new", (req, res) => {
    res.render("movies/new")
})

router.post('/movies/new', (req, res) => {
    const { title, genre, plot } = req.body
    Movie.create(req.params.id, {
        title: title,
        genre: genre,
        plot: plot
    }).then(newMovie => {
        newMovie.save();
        console.log("HERE IS THE RESP" + newMovie)
        res.redirect("/");
    }
    )
        .catch(err => {
            res.render("/movies/new")
            console.log(err)
        })
})

router.post('/movies/:id/delete', (req, res) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(() => {
            console.log("DELETED")
            res.redirect("/movies");
        })
        .catch(err => console.log(err))
})

router.get('/movies/:id/update', (req, res) => {
    Movie.findById(req.params.id)
        .then(dbRes => res.render("movies/update", { movie: dbRes }))
        .catch(err => console.log(err))
})

router.get('/movies/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(dbRes => res.render("movies/show", { movie: dbRes }))
        .catch(err => console.log(err))
})

router.post('/movies/:id/update', (req, res) => {
    const { title, genre, plot } = req.body
    Movie.findByIdAndUpdate(req.params.id, {
        title,
        genre,
        plot
    }).then(updatedMovie => console.log("HERE IS THE RESP" + updatedMovie))
        .catch(err => console.log(err))
})

module.exports = router;