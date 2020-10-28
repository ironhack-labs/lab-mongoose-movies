const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');
const colors = require('colors');

/* GET Add movie */
router.get('/new', (req, res, next)=>{
  try {
    (async()=>{
      res.render('movies/new');
    })();
  } catch (error) {
    console.log(error.message);
    next();
  }
});

/* Add movie */
router.post('/new', (req, res, next)=>{
  try {
    (async()=>{
      if(req.body.title && req.body.genre && req.body.plot){
        const movie = new Movie({
          name: req.body.title,
          occupation: req.body.genre,
          catchPhrase: req.body.plot
        });
        await movie.save();
        res.redirect('/movies');
      } else {
        res.redirect('/movies/new');
      }
    })();
  } catch (error) {
    console.log(error.message.red);
  }
});

/*GET All movies */
router.get('/', (req, res, next)=>{
    try {
      (async()=>{
        const movies = await Movie.find();
        console.log(movies);
        res.render('movies/index', {movies});
      })();
    } catch (error) {
      console.log(error.message);
    }
  });

/* GET Movie Details */
router.get('/:id', (req, res, next)=>{
  try {
    (async()=>{
      const movie = await Movie.findById(req.params.id);
      res.render('movies/show', {movie});
    })();
  } catch (error) {
    console.log(error.message);
    next();
  }
});

/* Remove Movie */
router.post('/:id/delete', (req, res, next)=>{
  try {
    (async()=>{
      await Movie.findByIdAndRemove(req.params.id);
      res.redirect('/movies');
    })();
  } catch (error) {
    console.log(error.message);
    next();
  }
});

/* GET Edit Movie */
router.get('/:id/edit', (req,res,next)=>{
  try {
    (async()=>{
      const movie = await Movie.findById(req.params.id);
      if(!movie){
        res.redirect('/edit')
      }
      res.render('movies/edit', {movie});
    })();
  } catch (error) { 
  }
});

/* Update movie */
router.post('/:id/edit', (req,res,next)=>{
  try {
    (async()=>{
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.redirect('/movies');
    })();
  } catch (error) {
    console.log(error.message.red);
  }
});

module.exports = router;