const express   = require('express');
const router    = express.Router();

const Movie     = require('../models/Movie');
const Celebrity = require('../models/Celebrity');

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
  Movie.findById(id).populate('stars')
  .then(movie =>{
      res.render('movies/show-movie', {movie: movie})
  })
  .catch((err)=>{
      next(err);
  })
});

router.get('/new-movie', (req, res, next)=>{
  res.render('movies/new-movie');
})

router.post('/created-movie', (req, res, next)=>{
  let title = req.body.title;
  let genre = req.body.genre;
  let plot = req.body.plot;
  let star = req.body.star;

  Movie.create({
      title: title,
      genre: genre,
      plot: plot,
      star: star
  })
  .then((result)=>{
    Celebrity.find()
    .then(allStars => {
      const data = {movie: result, stars: allStars}
      res.redirect('/movie-index', {data})
  })
  })
  .catch((err)=>{
    next(err);
  })
});


router.post('/delete-movie/:id', (req, res, next)=>{
  let id = req.params.id;

  Movie.findByIdAndRemove(id)
  .then((result)=>{
      res.redirect('/movie-index')
  })
  .catch((err)=>{
      next(err)
  })
});


router.get('/edit-movie/:id', (req, res, next)=>{
  let id = req.params.id;

  Movie.findById(id).populate('stars')
  .then(movie =>{
    console.log('===>', movie)
  Celebrity.find()
  .then(allStars => {
    const data = {
      movie: movie, 
      stars: allStars
    }  
    res.render('movies/edit-movie', {data});
  })
  })
  .catch((err)=>{
      next(err)
  })
});

router.post('/update-movie/:id', (req, res, next)=>{
  let id = req.params.id;

  Movie.findByIdAndUpdate(id, {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
      stars: req.body.stars
  })
  .then((result)=>{
      res.redirect('/show-movie/'+id)
  })
  .catch((err)=>{
      next(err);
  })
});


module.exports = router;