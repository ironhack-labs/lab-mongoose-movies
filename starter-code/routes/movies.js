var express = require('express');
var router = express.Router();
var Movie = require("../models/MovieModel");


// POST to delete movies
router.post("/:id/delete", (req, res) => {
    Movie.findByIdAndRemove(req.params.id)
    .then( () => res.redirect("/movies"))
    .catch( (err) => console.log(err));
})

// POST from new Movie Form
router.post("/new", (req, res) => {
    const {
        title,
        genre,
        plot
    } = req.body; //deconstructing the object right away
    Movie.create({
        title,
        genre,
        plot
    }) //passing it over the model --> returns a promise
        .then((movie) => {
            console.log(movie)
            res.redirect("/movies")
        })
        .catch((err) => console.log(err));
})

//GET new form
router.get("/new", (req, res) => {
    res.render("./../views/movies/new")
})


// GET listens to /movies/ID and shows detail
router.get("/:id", (req, res) => {
    Movie.findById(req.params.id)
        .then((result) => res.render("./../views/movies/show", {
            result: result
        }))
        .catch(err => console.log(err));
})


// GET listens to /movies and shows overview
router.get("/", (req, res) => {
    Movie.find()
        .then((result) => res.render("./../views/movies/index", {
            result: result
        }))
        .catch((err) => console.log(err));
})

module.exports = router;