const express = require('express');

const Movie = require('../models/movie');

const router = express.Router();

router.get('/movies/:id/edit', (req, res, next) => {
    const { id } = req.params;
    Movie.findById(id)
    .then(movieToEdit => {
      res.render ('movies/edit', movieToEdit);
    })
    .catch(error =>
      console.log(`Error while getting a single movie to edit: ${error}`));
  });
  
  router.post('/movies/:id/edit', (req, res) => {
    const { id } = req.params;
    const { name, genre, plot } = req.body;
    Movie.findByIdAndUpdate(
      id, 
      { name, genre, plot },
      { new: true }
    )
    .then(updatedMovie => res.redirect('/movies'))
    .catch(error =>
      console.log(`Error while updating a single movie: ${error}`))
  });

  router.post('/movies/:id/delete', (req, res, next) => {
    const { id } = req.params;
    Movie.findByIdAndRemove(id)
        .then(res.redirect('/movies'))
       .catch(error => console.log(`Error while deleting a movie: ${error}`));
   });
   
router.get('/movies/create', (req, res, next) => {
    res.render('movies/new');
   });

router.post('/movies/create', (req, res, next) => {
    const {name, genre, plot} = req.body;
  
    Movie.create({name, genre, plot})
    .then(() => res.redirect('/movies'))
    .catch(error => `Error while creating a new movie: ${error}`);
  });

router.get('/movies', (req, res, next) => {
 Movie.find()
 .then (allTheMoviesFromDB => {
   console.log(allTheMoviesFromDB);
   res.render('movies/index', {movies: allTheMoviesFromDB});
 })
 .catch(error =>
  console.log(`Error while getting the movies from the DB: ${error}`));
});

router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params;
    Movie.findById(id)
    .then(foundMovie => {
      res.render ('movies/show', foundMovie);
    })
    .catch(error =>
      console.log(`Error while getting a single movie: ${error}`));
  });
module.exports = router;
