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


//edit Movie
router.get('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;
 MovieModel.findById(id)
    .then(movieToEdit => {
      res.render('movies/edit-movie.hbs', movieToEdit)    
    })
    .catch(error =>
      console.log(`Error while getting a single Movie for edit: ${error}`)
    );});



router.post('/movies/:id/edit', (req, res, next) => {

  const { id } = req.params;
  const { title, genre, plot} = req.body;

  MovieModel.findByIdAndUpdate(
    id,
    { title, genre, plot},
    {new: true}
  )
    .then((updatedMovie) => res.redirect(`/movies/${updatedMovie._id}`))
    .catch(error => 
      res.redirect('/movies/:id/edit') 
      `Error while editing a movie: ${error}`);
});
module.exports = router;