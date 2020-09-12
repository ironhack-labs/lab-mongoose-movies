const express = require('express')
const router = express.Router()

const Movie = require("../models/movie.model")

//Index page

router.get("/", (req, res) => {
    Movie.find()
        .then(allMovies => {
            console.log(allMovies[0].title)
            res.render("movies/index", { allMovies })
        })
        .catch(err => console.log(`Ups, an error: ${err}`))
})

// Add new movie
router.get("/new", (req, res) => res.render("movies/new"))

router.post("/new", (req, res) => {
    const { title, genre, plot } = req.body

    Movie.create({ title, genre, plot })
        .then(() => res.redirect("/movies"))
        .catch(err => console.log(`Ups, an error: ${err}`))
})


// Delete a movie
router.post("/:movie_id/delete", (req, res) => {
    const movieId = req.params.movie_id
    Movie.findByIdAndDelete(movieId)
        .then(() => res.redirect("/movies"))
        .catch(err => console.log(`Ups, an error: ${err}`))
})

//Edit a movie
router.get("/:movie_id/edit", (req, res) => {
    const movieId = req.params.movie_id

    Movie.findById(movieId)
        .then(foundMovie => res.render("movies/edit", foundMovie))
        .catch(err => console.log(`Ups, an error: ${err}`))
})

router.post("/:movie_id/new", (req, res) => {
    const movieId = req.params.movie_id

    const { title, genre, plot } = req.body

    Movie.findByIdAndUpdate(movieId, { title, genre, plot })
        .then(() => res.redirect("/movies"))
        .catch(err => console.log(`Ups, an error: ${err}`))
})

// View movies details
router.get("/:movie_id", (req, res) => {
    const movieId = req.params.movie_id

    Movie.findById(movieId)
        .then(foundMovie => res.render("movies/show", foundMovie))
        .catch(err => console.log(`Ups, an error: ${err}`))
})



module.exports = router