const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// [GET] TO ADD A NEW MOVIE
router.get('/new', (req,res,next) =>
{
  res.render('movies/new');
});

// [POST] TO ADD A NEW MOVIE
router.post('/new', (req,res,next) =>{
  const {title, genre, plot} = req.body;
  const newMovie = new Movie({title, genre, plot});
  if(newMovie.title && newMovie.genre && newMovie.plot !== ""){
    newMovie.save()
    .then((movie) =>{
      res.redirect('/movies');
    })
    .catch((error) => {
      console.log(error);
      res.redirect('/movies/new');
    });
  }else{
    res.redirect('/movies/new');
  }
});

// [GET] TO LIST THE MOVIES
router.get('/', (req, res, next) =>{
  Movie.find().then(movie =>{
    res.render('movies/index', {movie});
  })
  .catch(next);
});

// [GET] TO SHOW THE DETAILS OF THE MOVIE
router.get('/:id',(req,res,next) => {
  let movId = req.params.id;
  if(!req.params.id){
    console.log(movId + ' <======= this is what it found : movId');
    return res.status(404).render('not-found');
  }
  Movie.findById(movId)
  .then(movie =>{
    if(!movie){
      console.log(movId + ' <======= this is what it found : movId');
      return res.status(404).render('not-found');
    }
    console.log(movie.title + ' <===== Movie');
    res.render('movies/show', {movie});
  })
  .catch(next);
});

// [POST] TO DELETE THE CELEBRITY
router.post('/:id/delete', (req,res,next) => {
  let movId = req.params.id;
  Movie.findByIdAndRemove(movId)
  .then((movie) => {
    if(!movie) return res.status(404).render('not-found');
    console.log('===> Successful Deletion. <===');
    res.redirect('/movies');
  })
  .catch(next);
});

// [GET] TO EDIT THE MOVIE
router.get('/:id/edit', (req,res,next) =>{
  let movId = req.params.id;
  if(!movId) return res.status(404).render('not-found');
  Movie.findById(movId)
  .then(movie => {
    if(!movie) return res.status(404).render('not-found');
    res.render('movies/edit', {movie});
  })
  .catch((err) =>{
    console.log(err);
  });
});

// [POST] TO EDIT THE MOVIE
router.post('/:id/edit', (req,res,next) =>{
  const {title, genre, plot} = req.body;
  let movId = req.params.id;
  Movie.update({_id: movId},{$set:{title,genre,plot}},{new: true})
  .then((movie) =>{
    console.log(movie.title);
    res.redirect('/movies');
  })
  .catch((err) =>{
    console.log(err);
  });
});


module.exports = router;