const express = require('express');
const router  = express.Router();
const Movie  = require('../models/Movie');

router.get('/movies', (req, res, next)=>{
  Movie.find()
  .then((movies)=>{
      res.render('movies/movies-index', {movies})
  })
  .catch((err)=>{
      next(err);
  })
})

router.get('/movies/new', (req, res, next)=>{
  res.render('movies/new-movie');
})

router.post('/movies/new', (req, res, next)=>{
  Movie.create(req.body)
  .then(()=>{
    res.redirect('/movies')
  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/movies/:id/delete', (req, res, next)=>{
  Movie.findByIdAndRemove(req.params.id)
  .then((x)=>{
    res.redirect("/movies")
  })
  .catch((err)=>{
    next(err)
  })

})

router.get('/movies/:id', (req, res, next)=>{
  Movie.findById(req.params.id)
  .then((movies)=>{
      res.render('movies/movie-details', movies);
        // res.render('celebrities/celebrity-details', celebrities)
  })
  .catch((err)=>{
      next(err);
  })
})

// router.get('/celebrities/5bec73d9ca4db9dcc3d7b797', (req, res, next)=>{
//   res.render('celebrities/celebrity-details')
  
// })




module.exports = router;
