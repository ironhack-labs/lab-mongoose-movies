const express = require("express");

const Movies = require('../models/Movie.model');
const router = express.Router();

// SHOW ALL MOVIES
router.get('/movies', (req, res, next) => {
    Movies.find()
    .then(allMoviesFromDB => {
    res.render('movies/index.hbs', { movieslist: allMoviesFromDB })
    }) 
    .catch(error => console.log(error));
});


// NEW Movie
router.get('/movies/new', (req, res, next) => res.render('movies/new.hbs'));
 

router.post('/movies/new', (req, res, next) => {
  const { name, genre, plot } = req.body;
  Movies.create({ name, genre, plot })
    .then(newMovieDB => {
      console.log(`New MOVIE created: ${newMovieDB.name}.`)
      res.redirect('/movies/')
    })
    .catch(error => `Error while creating a new celeb: ${error}`);
});


//SHOW SPECIFIC movie

router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params;
    Movies.findById(id)
    .then(movieFound => {
        res.render('movies/details.hbs', movieFound);
    })
    .catch(error => console.log(`Error found: ${error}`));
});


//EDIT 
router.get('/movies/:id/edit', (req, res, next) => {
const { id } = req.params;
Movies.findById(id)
.then(movietoEdit => {
    res.render('movies/edit.hbs', movietoEdit )
})
.catch(error => console.log(`Error while getting a single movie for edit: ${error}`));
});

router.post('/movies/:id/edit', (req, res, next) => {
    const { id } = req.params;
    const { name, genre, plot } = req.body;
   
    Movies.findByIdAndUpdate(id, { name, genre, plot }, { new: true })
      .then(updatedMovie => res.redirect('/movies'))
      .catch(error => console.log(`Error while updating a single movie: ${error}`));
  });




//DELETE
 
router.get('/movies/:id/delete', (req, res, next) => {
    const idDelete = req.params.id;
    Movies.findByIdAndDelete(idDelete)
    .then(deletedMovie => res.redirect('/movies'))
    .catch(error => console.log(`error while deleting: ${error}`));
});



module.exports = router;

