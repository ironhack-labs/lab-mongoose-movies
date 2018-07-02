const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js');

//route to display movies
router.get('/',(req,res,next) =>{
  Movie.find()
  .then(movies => {
    res.render("movies/index", {movies});
  })
  .catch (error =>{
    console.log(error);
  });
});

//route to display details of movie
router.get('/:id', (req,res,next)=>{
  let movieId = req.param.id;
  Movie.findOne({'_id':movieId})
  .then(movie =>{
    res.render("movies/show", {movie});
  })
  .catch(error => {
    console.log(error);
  });
});

//routes to add new movies
// router.get('/new', (req, res, next) => {
//   res.render("movies/new");
// });

router.post('/new', (req,res,next) =>{
  const {title, genre, plot} = req.body;
  const newMov = new Movie ({title, genre, plot});
  newMov.save()
  .then ((movie) => {
    res.redirect('/');
  })
  .catch((error) => {
    console.log(error);
    next();
  });
});

//route to delete movie
router.post('/:id/delete', (req, res, next) =>{
  let movId = req.param.id;
  Movie.findByIdAndRemove ({'_id':movId})
  .then(movie => {
    res.redirect('/movies');
  })
  .catch((error)=>{
    console.log(error);
    next();
  });
});

//route to edit movie
router.get('/edit', (req, res, next) =>{
  res.render("movies/edit");
});

router.get('/:id/edit', (req, res, next) =>{
  let movieId = req.param.id;
  Movie.findOne({_id: movieId})
  .then(movie => {
    res.render("movies/edit", {movie});
  })
  .catch((error)=>{
    console.log(error);
    next();
  });
});

router.post('/:id', (req, res, next) =>{
  const{title, genre, plot} = req.body;
  Movie.update({_id: req.params.id}, {$set: {title, genre, plot}})
  .then((movie) =>{
    res.redirect('/movies');
  })
  .catch((error) =>{
    res.redirect('/movies');
  })
  .catch((error)=>{
    console.log(error);
    next();
  });
});



module.exports = router;






