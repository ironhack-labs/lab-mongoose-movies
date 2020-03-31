const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

// rota index 
router.get('/', (req, res, next) => {
    Movie.find()
    .then(allMovies => {
        res.render('movies/index',{allMovies});
    })
    .catch(error => console.log(error));
});

// rota add movie
router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

router.post('/new', (req, res, next) => {
    const {title, genre, plot} = req.body;
    const newMovie = new Movie({title, genre, plot});
    newMovie.save()
    .then(res.redirect('/movies'))
    .catch(error => console.log(error));
});

// rota para deletar
router.get('/delete-movie/:id', (req, res, next) => {
    Movie
    .findByIdAndDelete(req.params.id)
    .then(theMovie => {
        res.redirect('/movies');
    })
    .catch(error => console.log(error));
    });

// rota editar
router.get('/edit/:movieId', (req, res, next) => {
    Movie
    .findById(req.params.movieId)
    .then(theMovie => {
        res.render('movies/edit', {movie:theMovie});
    })
    .catch(error => console.log(error));
 });
 
 router.post('/edit', (req, res, next) => {
     const{movieId, title, genre, plot} = req.body;
     Movie.findByIdAndUpdate(movieId, {$set:{title, genre, plot}}, 
     {new:true})
     .then(theEdit => {
         res.redirect(`/movies/${movieId}`)
     })
     .catch(error => console.log(error));
 });

 //rota movie details
router.get('/:id', (req, res, next) => {
    Movie
    .findById(req.params.id)
    .then(theMovie => {
        res.render('movies/show',{movie : theMovie})
    })
    .catch(error => console.log(error));
});


module.exports = router;