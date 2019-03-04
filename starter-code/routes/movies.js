const express = require ("express")
const router = express.Router()

const Movie = require('../models/Movie')

router.get("/", (req, res, next) =>{ //falta el next
    Movie.find()
    .then(movies => res.render("movies/index", {movies}) )
    .catch(err => console.log('Error', err))
})
router.get("/info/:id", (req, res) =>{
    Movie.findById(req.params.id)
    .then(movie => res.render("movies/show", {movie}))
})

router.get("/new", (req, res) =>{
    
 res.render("movies/new")
})

router.post("/new", (req, res) =>{
    const {title, genre, plot} = req.body
    const movie = new Movie({title, genre, plot})

    movie.save()
    .then(newMovie => res.redirect("/movies"))
    .catch(err => res.render("movies/index"))
})

router.post("/:id/delete", (req, res) =>{
    Movie.findByIdAndRemove(req.params.id)
    .then(movie => res.redirect("/movies"))
})

module.exports = router;
