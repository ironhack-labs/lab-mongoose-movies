const express = require('express');
const router  = express.Router();
const Movie   = require('../models/movie');
const Celebrity = require('../models/celebrity')

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((listOfMovies)=>{
        res.render('movies/index', {moviesArray: listOfMovies});
    })
    .catch((err)=>{
        next(err); 
     })
});

router.get('/movies/new', (req, res, next) =>{
    Celebrity.find()
    .then((allTheCelebs)=>{
        res.render('movies/new', {allTheCelebs})
    })
    .catch((err)=>{
        next(err);
    })
});

router.post('/movies/create', (req, res, next)=>{
    const newMovie = new Movie({
     title: req.body.title,
     genre: req.body.genre,
     plot: req.body.plot,
     celebrities: req.body.celebrities
    })

    //could use Movie.create(newMovie) instead of newMovie.save
    newMovie.save()
    .then((response)=>{
        res.redirect('/movies')
    })
    .catch((err)=>{
        res.render('movies/new')
    }) 
 
 });

 router.get('/movies/:id/edit', (req, res, next)=>{
    Movie.findById(req.params.id)
    
    .then((theMovie)=>{

        Celebrity.find()
        .then((allTheCelebs)=>{
            res.render('movies/edit', {theMovie: theMovie, allTheCelebs: allTheCelebs})
        })
    .catch((err)=>{
        next(err);
    })
    })
    .catch((err)=>{
        next(err);
    })
 })

 router.post('/movies/:id/update', (req, res, next)=>{
    Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        celebrities: req.body.celebrities
    })
    .then((theMovie)=>{
        res.redirect(`/movies/${req.params.id}`)
    })
    .catch((err)=>{
        next(err);
    })  
})

 router.post('/movies/:id/delete', (req, res, next)=>{
    Movie.findByIdAndRemove(req.params.id)
    .then((response)=>{
        res.redirect('/movies');
    })
    .catch((err)=>{
        next(err);
    })
});

router.get('/movies/:id', (req, res, next)=>{
    const theID = req.params.id;
    Movie.findById(theID)
    .populate('celebrities')
    .then((theMovie)=>{
        res.render('movies/show', {movie: theMovie})
    })
    .catch((err)=>{
        res.send(err)
    })
  });

module.exports = router;