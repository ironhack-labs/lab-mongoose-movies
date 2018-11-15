const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');
const Celebrity = require("../models/Celebrity");

router.get('/', (req, res, next) => {
    Movie.find()
    .then((movieList)=>{
        res.render('movies/index', {movies: movieList})
    })
    .catch((err)=>{
        next(err);
    })
});


router.get('/new', (req, res, next) => {
  Celebrity.find()
  .then((celebrities)=>{
    res.render('movies/new', {celebrities}); 
  })
  .catch((err)=>{
    next(err)
  })
});

router.post("/", (req, res, next) => {
  Movie.create(req.body)
  .then(()=>{
    res.redirect("/movie")
  })
  .catch(()=>{
    res.redirect('/movie/new');
  })
})

router.post("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.redirect("/movie")
  })
  .catch((err)=>{
    next(err)
  })
});

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((movie)=>{
    Celebrity.find()
    .then((celebrityList)=>{
      celebrityList.forEach((celebrity)=>{
        if(celebrity._id.equals(movie.star)){
          celebrity.selected = true;
        }
      })
      res.render('movies/edit', {movie: movie, celebrities: celebrityList});
    })
    .catch((err)=>{
      next(err)
    })
  })
  .catch((err)=>{
      next(err);
  })
});

router.post("/:id", (req, res, next)=>{
  Movie.findByIdAndUpdate(req.params.id, req.body)
  .then(()=>{
    res.redirect("/movie");
  })
  .catch((err)=>{
    next(err);
  })
})


router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id).populate('star')
  .then((movie)=>{
      res.render('movies/show', movie)
  })
  .catch((err)=>{
      next(err);
  })
});

module.exports = router;