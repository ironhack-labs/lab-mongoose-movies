const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Celebrity = require('../model/celebrity');
const Movie = require('../model/movie');
//GET movie index route to add new movie
router.get('/index',(req,res,next)=> {
    res.render('../views/movies/movie-index.hbs');
})
//GET the new movie form to fill in
router.get('/new',(req,res,next)=> {
    Celebrity.find()
        .then(celebrities => {
            res.render('../views/movies/new-movie.hbs',{celebrities})
        })
        .catch(err=>{throw err});
    
})
//POST save the new movie into the database by POST and redirect back to index
router.post('/create',(req,res,next)=> {
    const {title,genre,plot,cast} = req.body;
    const newMovie = new Movie({title,genre,plot,cast});
    newMovie.save()
        .then(movie => {
            console.log('A new movie is added to database');
            res.redirect('/movies/index');
        })
        .catch(err => {throw err});
})

//GET the movies lsit to see the movies list in database
router.get('/',(req,res,next)=> {
    Movie.find()
        .then(movies => {
            res.render('../views/movies/movies.hbs',{movies})
        })
        .catch(err => {throw err});
})

//GET the specific movie to see the movie details
router.get('/:movieId',(req,res,next)=> {
    Movie.findById(req.params.movieId)
        .populate('cast')
        .then(movie => {
            res.render('../views/movies/movie-details.hbs',movie)
        })
        .catch(err =>{throw err});
})

//POST to delete the specific movie.
router.post('/:movieId/delete',(req,res,next)=> {
    Movie.findByIdAndRemove(req.params.movieId)
        .then(movie => {
            console.log('The movie is deleted from the database')
            res.redirect('/movies');
        })
        .catch(err => {throw err});

})

//
router.get('/:movieId/edit',(req,res,next)=> {
    const celebrities = Celebrity.find()
    const movie = Movie.findById(req.params.movieId);
    Promise.all([movie,celebrities])
        .then(result => {
            res.render('../views/movies/edit-movie.hbs',{movie:result[0],celebrities:result[1]})
        })
        .catch(err => {throw err;});
})

router.post('/:movieId',(req,res,next)=> {
    const {title,genre,plot,cast} = req.body;
    Movie.findByIdAndUpdate(req.params.movieId,{title,genre,plot,cast})
        .then(()=> {
            res.redirect(`/movies/${req.params.movieId}`)
        })
        .catch(err => {throw err});
})


module.exports = router;