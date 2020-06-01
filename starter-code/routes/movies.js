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