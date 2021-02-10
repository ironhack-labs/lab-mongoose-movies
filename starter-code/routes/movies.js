const express = require('express');
const Movie = require('../models/Movie.model.js')

const router = express.Router();

// Iteration #8: Listing Our Movies

router.get('/movies', (req, res, next) => {
  
    Movie.find()
    .then((allMovies) => {
      console.log(allMovies)
      res.render("movies/index", {allMovies})
    }).catch(error => {
      console.log("No pudimos conseguir las películas")
      next(error)
    })

});

// Iteration #10: Adding New Movies
router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
  });
  
  router.post('/movies/new', (req, res, next) => {
    const {title, genre, plot} = req.body
    
    Movie.create({
      title, genre, plot
    })
    .then((moviesCreate) => {
    
      res.redirect('/movies')
    })
    .catch(error => {
      res.render('movies/new')
    })
  });


// Iteration #9: The Movie Details Page
//Rutas con parámetros siempre van abajo
router.get('/movies/:moviesId', (req, res, next) => {

    const id = req.params.moviesId
  
    Movie.findById(id)
    .then((detailMovie) =>{
      res.render('movies/show', {movies : detailMovie})
    })
    .catch(error =>next(error))
  });

  //Iteration #11: Deleting Movies
router.post('/movies/delete/:id', (req, res, next) => {
  
    const id = req.params.id
  
    Movie.findByIdAndDelete(id)
    .then(() =>{
      res.redirect('/movies')
    })
    .catch((error)=> next(error))
  });


//Iteration #12 (Bonus): Editing Movies
router.get('/movies/edit/:id', (req, res, next) => {

  const {id} = req.params

  Movie.findById(id)
  .then((movieToFindEdit) =>{
    console.log(movieToFindEdit)
    res.render('movies/edit', {movies : movieToFindEdit})
  })
  .catch(error => next(error))
});

router.post('/movies/edit/:id', (req, res, next) => {

  const {id} = req.params
  
  const {title, genre, plot} = req.body

  Movie.findByIdAndUpdate(id, {title, genre, plot}, {new:true})
  .then((movieActualizado) => {
    res.redirect(`/movies/${movieActualizado.id}`)})
  .catch(error => next(error))
});

module.exports = router;
