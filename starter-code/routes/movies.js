const express = require('express');
const routerMovies  = express.Router();

const Movie = require('../models/Movie');

/* GET Movies list  */


routerMovies.get('/', (req,res,next) => {
    Movie.find()
     .then(movies => {
        res.render('movies/index', {movies});
     })
     .catch(next)
 
 })
 


 /* GET form new movie */
 
 routerMovies.get('/new',(req,res,next) =>{
    res.render('movies/new');
  })



 /* GET specicy movie */
 
 routerMovies.get('/:id', (req,res,next) =>{
    let movieId = req.params.id;
  
    Movie.findOne({'_id':movieId})
      .then(movie =>{
          res.render('movies/show', movie);
      })
      .catch(next)
  })


   
 /* POST create new Movie */
 
 routerMovies.post('/', (req,res,next) => {
   
    var objMovie = {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    }
 
    console.log(objMovie);
 
    const newMovie = new Movie();
 
    newMovie.title = objMovie.title;
    newMovie.genre = objMovie.genre;
    newMovie.plot = objMovie.plot;
 
    newMovie.save()
     .then(()=>{
       res.redirect('/movies');
     })
     .catch(()=>{
       req.redirect('/movies');
     })
 })
 

/* POST Delete movie*/
 
routerMovies.post('/:id/delete', (req,res,next)=>{
    let movieId = req.params.id;
  
    Movie.findByIdAndRemove({'_id':movieId})
      .then(()=>{
         res.redirect('/movies');
      })
      .catch(next)
  
  })


  /* GET EDIT Movie */
 
 routerMovies.get('/:id/edit', (req,res,next)=>{
    let movieId = req.params.id;
 
    Movie.findOne({'_id': movieId})
     .then(movie=>{
         res.render('movies/edit', movie);
     })
     .catch(next)
 })
 


 /* POST EDIT Movie */
 
 routerMovies.post('/:id',(req,res,next)=>{
 
    let movieId = req.params.id;
  
    var objMovie = {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    }
  
    Movie.findByIdAndUpdate(movieId, {$set: objMovie}, {new:true} )
      .then(()=>{
        res.redirect('/movies');
      })
      .catch(next)
  })
  
 

 module.exports = routerMovies;