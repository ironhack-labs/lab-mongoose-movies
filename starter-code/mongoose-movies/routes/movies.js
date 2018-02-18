const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

//route LIST OF ALL MOVIES
router.get('/', (req, res, next) => {
   Movie.find({}, (err, movies) => {
       if (err) {return next(err) }

       res.render('movies/list', {
           movies: movies
       });
   });
});

//route GET CREATE A NEW MOVIE
router.get("/new", (req,res,next) => {
   res.render("movies/new");
});

//route POST SAVE A NEW MOVIE
router.post('/', (req, res, next) => {

    //Create a new object with all of the information from the request body.
   let movieInfo = {
       title: req.body.title,
       genre: req.body.genre,
       plot: req.body.plot,
   };
 
   const newMovie = new Movie(movieInfo);

   newMovie.save( (err) => {
       // Error Handling
       if (err) { return next(err) }

       // Redirect to the List of Movies
       // if it saves.
       return res.redirect('/movies');
   });
 });

 //route MOVIE DETAILS 
 router.get("/:id", (req,res,next) => {
    let movieId = req.params.id;

    Movie.findById(movieId, (err, movie) =>{
        if(err) {next(err)}
        res.render("movies/details", {
            movie: movie
        });
    })
 });

  //route UPDATE MOVIE FORM  
  router.get("/:id/edit", (req,res,next) => {
    let movieId = req.params.id;

    Movie.findById(movieId, (err, movie) =>{
        if(err) {next(err)}
        res.render("movies/edit", {
            movie: movie
        });
    })
 });

 //route SAVE UPDATED MOVIE FORM  
 router.post("/:id", (req,res,next) => {
    let movieId = req.params.id;

    const updatedMovieInfo = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    }

    const updatedMovie = new Movie (updatedMovieInfo);

    Movie.findByIdAndUpdate({_id: movieId}, updatedMovieInfo, (err, movie) => {
        if(err) {return next(err)}
        return res.redirect('/movies/'+ movieId);
    })
 });

  //route DELETE MOVIE
router.post("/:id/delete", (req, res, next) =>{

    let movieId = req.params.id;
    
    Movie.findByIdAndRemove(movieId, (err, movie) => {
        if(err) {return next(err)}
        return res.redirect('/movies');
    })
})

module.exports = router; 