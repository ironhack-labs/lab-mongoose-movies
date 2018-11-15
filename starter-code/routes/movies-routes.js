const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie');
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
  Movie.find().populate('celebrities')
  .then((allTheMovies)=>{
      res.render('movies/movies', {movies: allTheMovies})
  })
  .catch((err)=>{
      next(err);
  })
});


router.get('/new', (req, res, next) => {
  Movie.find()
  .then((allTheMovies)=>{
      res.render('movies/new-movie', {allTheMovies})
  })
  .catch((err)=>{
      next(err);
  })
});

router.post('/create', (req, res, next)=>{
      Movie.create(req.body)
      .then(()=>{
          res.redirect('/movies');
      })
      .catch((err)=>{
          next(err)
      })
});

router.get('/:theIdThing/edit', (req, res, next)=>{
  Movie.findById(req.params.theIdThing)
  .then((theMovie)=>{
      res.render('movies/edit', {theMovie: theMovie})    
  })
  .catch((err)=>{
      next(err);
  })
});

router.get('/:theID', (req, res, next)=>{
  Movie.findById(req.params.theID)
  .then((theMovie)=>{
      res.render('movies/details', theMovie)
  })
  .catch((err)=>{
      next(err);
  })
});

router.post('/:id/update', (req, res, next)=>{
  Movie.findByIdAndUpdate(req.params.id, req.body)
  .then(()=>{
      res.redirect('/movies/'+req.params.id);
  })
  .catch((err)=>{
      next(err)
  })
});

router.post('/:id/delete', (req, res, next)=>{
  Movie.findByIdAndRemove(req.params.id)
  .then(()=>{
      res.redirect('/movies')
  })
  .catch((err)=>{
      next(err);
  })
});





module.exports = router;