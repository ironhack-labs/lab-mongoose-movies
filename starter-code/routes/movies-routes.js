const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/Movie");
const CelebrityModel = require("./../models/Celebrity")

// get - show a form to create a movie

router.get("/movie/new", (req, res, next) => {
    CelebrityModel.find()
    .then((dbCelebrities) => {
    res.render("movies/new-movie", {celebrities : dbCelebrities});
    })
    .catch((error)=>{
        next(error)
    })
});

// post - save the form user inputs to the database 

router.post("/movies/create", (req, res, next) => {
    MovieModel.create(req.body)
    .then((dbMovie)=> {
        console.log("----------------- Yay movie created!! ----------------")
        console.log(dbMovie)  
        res.redirect("/movies")
    })
    .catch((error)=>{
        res.redirect("/movie/new");
        next(error);
    })
})

router.get("/movies", (req, res, next)=>{
    MovieModel.find(req.body)
    .then((dbMovies)=>{
        res.render("movies/movies", {movies : dbMovies})
    })
    .catch((error)=>{
        next(error)
        res.redirect("/movie/new");
    })
})


router.get("/movies/:id", (req, res, next) =>{
    MovieModel.findById(req.params.id).populate("cast")
    .then((dbMovie)=>{
        res.render("movies/movie-details", {movie : dbMovie});
    })
})

router.post("/movies/:id/delete", (req, res, next)=>{
    MovieModel.findByIdAndRemove(req.params.id)
    .then(()=>{
        console.log("-------------movie successfully deleted")
        res.redirect("/movies")
    })
    .catch((error)=>{
        console.log("there's an error")
        next(error)
    })
})

module.exports = router;