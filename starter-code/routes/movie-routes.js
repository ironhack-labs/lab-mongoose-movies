const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie');


router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((movieDB)=>{
      res.render('Films/movie-page', {movie: movieDB});
    })
    .catch((err)=>{
      next(err)
  
    })
});
router.get('/movies/new', (req, res, next) => {
    res.render("Films/new-movie");
});

router.post('/movies/create', (req, res, next)=>{
    Movie.create(req.body)
    .then(()=>{
        res.redirect('/movies');
    })
    .catch((err)=>{
        next(err)
    })
})

router.get('/movies/:theIdThing/edit', (req, res, next)=>{
    Movie.findById(req.params.theIdThing)
    .then((theMovie)=>{
     res.render('Films/movie-edit', {theMovie: theMovie})
    })
    .catch((err)=>{
        next(err);
    })
});


router.post('/movies/:id/update', (req, res, next)=>{

    Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
        res.redirect('/movies/'+req.params.id);
    })
    .catch((err)=>{
        next(err)
    })
})



router.get('/movies/:theID', (req, res, next)=>{
    Movie.findById(req.params.theID)
    .then((movieInfoFromDB)=>{
        res.render('Films/movie-details', {theFilm: movieInfoFromDB})
    })
    .catch((err)=>{
        next(err);
    })
})
router.post('/movies/:id/delete', (req, res, next)=>{
    Movie.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect('/movies')
    })
    .catch((err)=>{
        next(err);
    })
})




module.exports = router;