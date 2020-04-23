const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie.js');
const Celebrity = require('../models/celebrity.js');


/* LIST ALL */
/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render("movies/index", { movies });
  })
  .catch(error => {
    console.log(error)
  })
});


/* SHOW ONE */
/* GET movies/show/:id show page */
router.get('/movies/show/:id', (req, res, next) => {
  Movie.findOne({'_id': req.params.id})
  .populate('_celebrities')
  .then(movie => {
    if (!movie) {
      return res.status(404).render('not-found');
    }
    res.render("movies/show", movie )
  })
  .catch(next)
});


/* ADD-1 */
// GET movie-add
router.get('/movies/add', (req, res, next) => {
  res.render("movies/add")
});

/* ADD-2 */
// POST movie-add
router.post('/movies/add', (req, res, next) => {
  let { name, genre, plot } = req.body;

  let newMovie = new Movie({ name, genre, plot })
  newMovie.save()
  .then((movie) => {
    res.redirect('/movies')
  })
  .catch((error) => {
    console.log(error)
  })
});

/* UPDATE-1 */
// GET movie-edit
router.get('/movies/edit/:id', (req, res, next) => {
  
  Celebrity.find()
  .then((allCelebrities) => { 
    Movie.findOne( {_id: req.params.id } )
    .populate('_celebrities')
    .then(( movie ) => {
  
      let data = { celebrities: allCelebrities, movie: movie }
  
      res.render("movies/edit", data )
      console.log(movie)
    })
  })

  // console.log("Promise.all", Promise.all)

  // Promise.all(
  //   Celebrity.find(),
  //   Movie.findOne( {_id: req.params.id } ).populate('_celebrities')
  // )
  // .then(([allCelebrities, movie]) => {
  //   console.log(movie)
  //   let data = { celebrities: allCelebrities, movie: movie }
  
  //   res.render("movies/edit", data )
  // }) 
  // .catch((error) => {
  //   console.log(error)
  // })
});


/* UPDATE-2 */
// POST movie-edit
router.post('/movies/edit/:id', (req, res, next) => {
  let { name, genre, plot } = req.body;
  Movie.findByIdAndUpdate({_id: req.params.id}, { name, genre, plot })
  .then((movie) => {
    res.redirect('/movies')
  })
  .catch((error) => {
    console.log(error)
  })
});


/* DELETE */
// GET movie-delete
router.get('/movies/delete/:id', (req, res, next) => {
  console.log(req.params.id)
  Movie.findByIdAndRemove({_id: req.params.id})
  .then((movie) => {
    res.redirect('/movies')
  })
  .catch((error) => {
    console.log(error)
  })
});

module.exports = router;
