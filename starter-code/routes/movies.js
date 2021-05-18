const express = require('express');
const router  = express.Router();

const Movie = require("../models/movie");

router.get("/movies", (req, res, next) => {
    Movie.find()
    .then((dbMovies) => {
        res.render("movies/index", {movies: dbMovies})
    })
    .catch(error => next(error));
})

router.get("/movies/new", (req, res, next) => {
    res.render("movies/new")
})

router.post("/movies/new", (req, res, next) => {
    const { title, genre, plot } = req.body;
 
    Movie.create({ title, genre, plot })
      .then(() => res.redirect('/movies'))
      .catch(() => res.render("/movies/new"))
  });

router.get("/movies/:id", (req, res, next) => {
    const { id } = req.params;
    Movie.findById(id) 
    .then(theMovie => res.render('movies/show', { movie: theMovie }))
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
      next(error);
    });
})

router.get('/movies/:id/edit', (req, res, next) => {
    const { id } = req.params;
  
    Movie.findById(id)
      .then(movieToEdit => {
        res.render('movies/edit', {movie: movieToEdit}); 
      })
      .catch(error => next(error));
  });
  
  router.post('/movies/:id/edit', (req, res) => {
    const { id } = req.params;
    const { title, genre, plot } = req.body;
   
    Movie.findByIdAndUpdate(id, { title, genre, plot }, { new: true })
      .then(res.redirect('/movies'))
      .catch(error => next(error));
  });

router.post("/movies/:id/delete", (req, res, next) =>{
    const {id} = req.params;

    Movie.findByIdAndDelete(id)
    .then(() => res.redirect('/movies'))
    .catch(error => next(error))
})


module.exports = router;