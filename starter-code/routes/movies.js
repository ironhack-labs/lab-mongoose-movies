const express      = require('express');
const router       = express.Router();
const Movie        = require('../models/Movie')

//get reqs always end in a res.render
//post reqs always end in a redirect

//get homepage movies
router.get('/movies', (req, res, next) => {
        
    Movie.find()
        .then((listOfMovies)=>{
            console.log(listOfMovies);
            res.render('movies/index', {theMovieList: listOfMovies})
        })
        .catch((err)=>{
            next(err);
        })
});

//create a new movie listing
router.get('/movies/new', (req, res, next)=> {
    res.render('movies/create');
})

//post a new movie listing
router.post('/movies/create', (req, res, next)=> {
        
    Movie.create({
            title: req.body.title,
            genre: req.body.genre,
            plot: req.body.plot,
        })
        .then ((response)=> {
            res.redirect('/movies')
        })
        .catch((err)=> {
            next(err);
        })
})

//delete a movie listing
router.post("/movies/delete/:theid", (req, res, next)=> {

    Movie.findByIdAndRemove(req.params.theid)
        .then((response)=>{
            res.redirect("/movies")
        })
        .catch((err)=>{
            next(err);
        })
})

//get the edit for a movie listing
router.get("/movies/edit/:movieID", (req, res, next)=>{

    Movie.findById(req.params.movieID)
        .then((theMovie)=> {
            res.render('movies/edit', {movie: theMovie})
        })
        .catch((err)=>{
            next(err);
        })
})

//post the edited movie listing
router.post("/movies/update/:movieID", (req, res, next)=>{
        
    Movie.findByIdAndUpdate(req.params.movieID, {
            title: req.body.title,
            genre: req.body.genre,
            plot: req.body.plot
        })
        .then((response)=>{
            req.redirect('/movies/'+req.params.movieID)
        })
        .catch((err)=>{
            next(err);
        })
})

//get movie by id
router.get('/movies/:theid', (req, res, next)=>{
        
    Movie.findById(req.params.theid)
        .then ((movie)=>{
            res.render('movies/show', {theMovie: movie})
        })
        .catch ((err)=>{
            next(err);
        })
})

module.exports = router;