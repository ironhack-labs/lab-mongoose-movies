const express = require("express")
const router = express.Router()
const Movie = require("../models/movie.js")

router.get("/", (req, res, next) => {
    Movie.find()
        .then(allMovies => res.render("movies/index", {
            allMovies
        }))
        .catch(err => console.log("An error ocurred", err))
})



router.get("/new", (req, res, next) => {
    Movie.find()
        .then(allMovies => res.render("movies/new", {
            allMovies
        }))
})

router.post("/new", (req, res, next) => {

    const {
        title,
        genre,
        plot
    } = req.body;
    const newMovie = new Movie({
        title,
        genre,
        plot
    })
    newMovie.save()
        .then(() => res.render("/"))
        .catch(err => {
            res.redirect("/new")
        })
})

router.post("/:id/delete", (req, res, next) => {
    console.log(req.params.id)
    Movie.findByIdAndRemove(req.params.id)
        .then(() => res.redirect("/movies"))
        .catch(err => console.log("Error rying to delete a movie", err))
})


router.get("/:id", (req, res, next) => {
    Movie.findById(req.params.id).then(infoMovie => {
            console.log(infoMovie)
            res.render("movies/show", {
                movies: infoMovie
            })
        })
        .catch(err => console.log("An error has occurred with movies details", err))
})
module.exports = router;