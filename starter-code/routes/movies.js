const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

router.get('/movie-index', (req, res, next)=>{

  Movie.find()
  .then(allMovies=>{
      res.render('movies/movie-index', {movies: allMovies})
  })
  .catch((err)=>{
      next(err);
  })

})

router.get('/show-movie/:id', (req, res, next)=>{
  let id = req.params.id;
  Movie.findById(id)
  .then(movie =>{
      res.render('movies/show-movie', {movie: movie})
  })
  .catch((err)=>{
      next(err);
  })

})

router.get('/new-movie', (req, res, next)=>{
  res.render('movies/new-movie');
})

router.post('/created-movie', (req, res, next)=>{

  let title = req.body.title;
  let genre = req.body.genre;
  let plot = req.body.plot;


  Movie.create({
      title: title,
      genre: genre,
      plot: plot
  })
  .then((result)=>{
      res.redirect('/movie-index')
  })
  .catch((err)=>{
      next(err);
  })
})


router.post('/delete-movie/:id', (req, res, next)=>{
  let id = req.params.id;

  Movie.findByIdAndRemove(id)
  .then((result)=>{
      res.redirect('/movie-index')
  })
  .catch((err)=>{
      next(err)
  })
})


router.get('/edit-movie/:id', (req, res, next)=>{

  let id=req.params.id;

  Movie.findById(id)
  .then(movie =>{
      res.render('movies/edit-movie', {movie: movie})
  })
  .catch((err)=>{
      next(err)
  })
})


router.post('/update-movie/:id', (req, res, next)=>{

  let id=req.params.id;

  Movie.findByIdAndUpdate(id, {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
  })
  .then((result)=>{
      res.redirect('/show-movie/'+id)
  })
  .catch((err)=>{
      next(err);
  })

})


module.exports = router;