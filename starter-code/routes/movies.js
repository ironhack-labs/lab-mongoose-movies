const express = require('express');

//require movies model 
const router = express.Router();
const MovieModel = require('../models/movie');


//display movies and list on localhost:3000/movies
router.get('/movies', (req,res, next) => {
    MovieModel.find()
    .then(allTheMoviesFromDB => {
        console.log(allTheMoviesFromDB)
        res.render('movies/index',{movies: allTheMoviesFromDB})
    })
    .catch(err=> {
        console.log(`Err While getting the Movies from the DB: ${err}`)
      })
})

//display movie details on /movies/:id
router.get('/movies/:id', (req,res,next) => {
    const { id } = req.params;
    console.log(id)
    MovieModel.findById(id)
    .then(allMovieDetails => {
        console.log(allMovieDetails)
        res.render('movies/show', {movieDetails: allMovieDetails})
    })
    .catch(err=> {
        console.log(`Err While getting the Movie Details from the DB: ${err}`)
    })
})

//new movieform
router.get('/newMovie', (req,res) =>{
    res.render('movies/new')
})

router.post('/newMovie', (req, res, next) => {
    const { title, genre, plot} = req.body;
  
    MovieModel.create({title, genre, plot})
    .then(() => 
    res.redirect('/movies'))
    .catch(error => 
      res.redirect('/newMovie') 
      `Error while creating a new movie: ${error}`);
  });


//delete Movie
  router.post('/movies/:id/delete', (req, res, next) => {
    const { id } = req.params;
  
    MovieModel.findByIdAndRemove(id)
    .then(() => res.redirect('/movies'))
    .catch(error => console.log(`Error while deleting a Movie: ${error}`));
  });

module.exports = router;