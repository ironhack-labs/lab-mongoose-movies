const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");

router.get("/", (req, res, next) => {
    Movie.find()
        .then((movies) => {
            console.log("all my movies: " + movies);
            res.render("movies/index", {
                allMovies: movies,
            });
        })
        .catch((error) => {
            console.log("Error while getting the movies from the DB: ", error);
        });
});

router.get("/new", (req, res) => {
    res.render("movies/new")
})
router.post("/new", (req, res) => {
    console.log(req.body);
    let movie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    })
    movie.save().then(() => {
        res.redirect("/movies")
    }).catch((error) => {
        console.log("Error while adding a new movie ", error);
    })
})

router.post("/:id/delete", (req, res) => {
    console.log(req.params.id);
    Movie.findByIdAndDelete(req.params.id).then(() => {
        res.redirect("/movies")
    }).catch((error) => {
        console.log('Error while deleting a movie', error);
    })
})

router.get("/:id/edit", (req, res) => {
    console.log(req.params.id);
    Movie.findById(req.params.id).then((movie) => {
        res.render("movies/edit", movie)

    }).catch((error) => {
        console.log("Error while editing a movie", error);
    })
})

router.post("/:id/edit", (req, res) => {
    console.log(req.body);
    Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    }).then(() => {
        res.redirect('/movies')
    }).catch((error) => {
        console.log("Error while editing a movie");
    })
})

router.get("/:id", (req, res) => {
    console.log(req.params.id);
    Movie.findById(req.params.id).then((movie) => {
        console.log(movie);
        res.render("movies/show", {
            movieDetails: movie
        })
    })
})

module.exports = router;