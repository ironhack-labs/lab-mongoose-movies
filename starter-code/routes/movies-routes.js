const express = require('express');
const router  = express.Router();
const MovieModel = require('../model/movie-model')
const CelebrityModel = require('../model/celebrity-model')


router.get("/", (req, res, next)=>{
    MovieModel.find().populate("celebrities")
    .then((movies)=>res.render('movies/movies', {movies} ))
    .catch(next) 
})


router.get("/new", (req, res, next)=>{
    CelebrityModel.find()
    .then((celebrities)=> {
    console.log(celebrities);
    res.render('movies/new-movie', {celebrities} )
})
    .catch(next) 
})


router.post("/create", (req,res,next)=>{
    const {title, genre, plot, cast}= req.body
    MovieModel.create({title, genre, plot, cast})
    .then(()=>res.redirect("/movies"))
    .catch(next)
})

router.get("/:id", (req, res, next) => {
    MovieModel.findById(req.params.id)
    .populate("cast")
    .then((movie) => {
    console.log(movie);
    res.render("movies/movie-details", {movie});
})
    .catch(next)
})

// delete movie:

router.post("/:id/delete", (req, res, next) => {
    MovieModel.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/movies"))
    .catch(next)
})

// edit movie:

router.get("/:id/edit", (req, res, next) => {
    MovieModel.findById(req.params.id)
    .populate("cast")
    .then((movie) => {
        res.render("movies/edit-movie", {movie})
    })
    .catch(next)
})

router.post("/:id", (req, res, next) => {
    const {title, genre, plot, cast}= req.body
    MovieModel.findByIdAndUpdate(req.params.id, {title, genre, plot, cast})
    .then((movie)=>res.redirect("/movies/:id", {movie}))
    .catch(next)
})
//res.render("movies/movie-detail", {movie})

module.exports = router