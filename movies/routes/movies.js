const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const { movies: {index, add, show, edit}} = require('../pages');
const Auth = require('../middlewares/auth');

//shows all movies
router.get('/', (req, res, next) => {
    Movie.find()
    .then(movies => {
        req.session.currentPage = index;
        res.render('movies/index', {movies});
    })
    .catch(error => {
        next(error);
    })
});

//shows form to add new movie
router.get('/new', Auth.ensureLogin, (req, res, next) => {
    req.session.currentPage = add;
    res.render('movies/new');
});

//process of adding a new movie. Then shows all movies
router.post('/', Auth.ensureLogin, (req, res, next) => {
    const {title, genre, plot} = req.body;
    const movie = new Movie({title, genre, plot});
    movie.save()
    .then(()=>{
        res.redirect('/movies');
    })
    .catch(error=>{
        next(error);
    })
});

//shows celebrity details by id
router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie=>{
        if(show.origin === '/movies')
        {
            show.origin = show.origin + '/' + movie.id;
            show.alternative = show.origin;
        }
        req.session.currentPage = show;
        res.render('movies/show', movie);
    })
    .catch(error=>{
        next(error);
    })
});

//deletes a concrete movie
router.post('/:id/delete', Auth.ensureLogin, (req,res,next) => {
    Movie.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect('/movies');
    })
    .catch(error=>{
        next(error);
    })
});

//shows the form to edit a concrete movie
router.get('/:id/edit', Auth.ensureLogin, (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie=>{
        req.session.currentPage = edit;
        res.render('movies/edit', movie);
    })
    .catch((error)=>{
        next(error);
    })
});
router.post('/:id', (req,res,next)=>{
    Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
        res.redirect('/movies');
    })
    .catch(error=>{
        next(error);
    })
});

module.exports = router;