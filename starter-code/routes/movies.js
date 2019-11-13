const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

//find movie --------------------
router.get("/movies", (req, res) => {
    Movie.find()
        .then(dbRes => {
            console.log(dbRes);
            res.render("movies/index", { movie: dbRes });
        })
        .catch(err => {
            console.log(err);
        });
});

// show new movie view --------------------
router.get("/movies/new", (req, res) => {
    res.render("movies/new");
});

//Delete movie --------------------
router.post("/movies/:id/delete", (req, res) => {
    Movie.findByIdAndRemove({ _id: req.params.id }).then(dbRes => {
        res.redirect("/movies");
    });
});

// find movie by id --------------------
router.get("/movies/:id", (req, res) => {
    Movie.findOne({ _id: req.params.id }).then(dbRes => {
        res.render("movies/show", { movie: dbRes }).catch(err => {
            console.log(err);
        });
    });
});

// create a new movie --------------------
router.post("/movies/create", (req, res) => {
    var newMovie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    });
    newMovie
        .save()
        .then(dbRes => {
            res.redirect("/movies");
        })
        .catch(err => {
            res.redirect("/movies/new");
        });
});

module.exports = router;