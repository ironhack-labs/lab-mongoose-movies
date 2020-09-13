const express = require("express")
const router = express.Router()

const Movie = require("../models/movie.model")


//Movies list
router.get('/', (req, res) => {
    Movie.find()
        .then(movies => res.render('movies/index', {movies}))
        .catch(err => console.log('ERROR:', err))
})

//Add
router.get("/new", (req, res) => res.render("movies/new"))

router.post("/new", (req, res) => {
    const { title, genre, plot } = req.body
    
    Movie.create({ title, genre, plot })
    .then(() => res.redirect("/movies"))
    .catch(err => console.log('ERROR:', err))
})

//Delete
router.post("/:movie_id/delete", (req, res) => {
    const moviesId = req.params.movie_id

    Movie.findByIdAndDelete(moviesId)
        .then(() => res.redirect("/movies"))
        .catch(err => console.log('ERROR:', err))
})

//Edit
router.get("/:movie_id/edit", (req, res) => {
    const moviesId = req.params.movie_id

    Movie.findById(moviesId)
        .then((foundMovie) => res.render("movies/edit", foundMovie))
        .catch(err => console.log('ERROR:', err))
})

router.post("/:movie_id", (req, res) => {
    const moviesId = req.params.movie_id

    const { title, genre, plot } = req.body

    Movie.findByIdAndUpdate(moviesId, { title, genre, plot })
        .then(() => res.redirect("/movies"))
        .catch(err => console.log('ERROR:', err))
})

//Details
router.get("/:movie_id", (req, res) => {
    const moviesId = req.params.movie_id

    Movie.findById(moviesId)
        .then(foundMovie => res.render("movies/show", foundMovie))
        .catch(err => console.log('ERROR:', err))
})


module.exports = router