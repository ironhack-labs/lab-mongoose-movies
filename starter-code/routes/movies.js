const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

router.get('/index', (req, res, next)=>{

  Movie.find()
  .then(allMovies=>{
      res.render('movies/index', {movies: allMovies})
  })
  .catch((err)=>{
      next(err);
  })

})

router.get('/show/:id', (req, res, next)=>{
  let id = req.params.id;
  Movie.findById(id)
  .then(movie =>{
      res.render('movies/show', {movie: movie})
  })
  .catch((err)=>{
      next(err);
  })

})

router.get('/new-movie', (req, res, next)=>{
  res.render('movies/new');
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
      res.redirect('/index')
  })
  .catch((err)=>{
      next(err);
  })
})


router.post('/delete/:id', (req, res, next)=>{
  let id = req.params.id;

  Movie.findByIdAndRemove(id)
  .then((result)=>{
      res.redirect('/index')
  })
  .catch((err)=>{
      next(err)
  })
})


router.get('/edit/:id', (req, res, next)=>{

  let id=req.params.id;

  Movie.findById(id)
  .then(movie =>{
      res.render('movies/edit', {movie: movie})
  })
  .catch((err)=>{
      next(err)
  })
})


router.post('/update/:id', (req, res, next)=>{

  let id=req.params.id;

  Movie.findByIdAndUpdate(id, {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
  })
  .then((result)=>{
      res.redirect('/show/'+id)
  })
  .catch((err)=>{
      next(err);
  })

})


module.exports = router;