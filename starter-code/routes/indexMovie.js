const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies');

router.get('/movies', (req, res, next) => {
    Movies.find()
        .then((allMovies)=>{
            console.log('=-=-=-=-=-=-=-=-=',allMovies)
            res.render('views-movies/movies', {allMovies});
    })
        .catch((err)=>{
            next(err);
    })
});

router.get('/movies/new', (req, res, next) => {
    Movies.find()
    .then((allTheMovies)=>{
        res.render('views-movies/new-movie', {allTheMovies})
    })
    .catch((err)=>{
        next(err);
    })
  });

router.post('/movies/create', (req, res, next)=>{
    Movies.create(req.body)
    .then(()=>{
        res.redirect('/movies');
    })
    .catch((err)=>{
        next(err)
    })
  })

  router.post('/movies/:theID/delete', (req, res, next)=>{
    Movies.findByIdAndRemove(req.params.theID)
      .then(()=>{
        res.redirect('/movies');
    })
      .catch((err)=>{
        console.log(err);
        next(err);
    })
  })


router.get('/movies/:theID/edit', (req, res, next)=>{
    Movies.findById(req.params.theID)
      .then((theMovie)=>{
        res.render('views-movies/edit', {theMovie})
    })
      .catch((err)=>{
        console.log(err);
        next(err);
    })
  })
  
  router.post('/movies/:theID/update', (req, res, next)=>{
    Movies.findByIdAndUpdate(req.params.theID, req.body)
      .then(()=>{
        res.redirect('/movies/'+req.params.theID);
    })
    .catch((err)=>{
        next(err)
    })
  })


router.get('/movies/:theID', (req, res, next)=>{
    Movies.findById(req.params.theID)
      .then((specificsFromDB)=>{
        res.render('views-movies/movies-det', {theSpecifics: specificsFromDB})
    })
      .catch((err)=>{
        next(err);
    })
  })

module.exports = router;
