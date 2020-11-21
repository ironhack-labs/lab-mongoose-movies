const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.model')

/* GET Movies page */
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((movies) => {
        res.render('movies', {movies});
    })
    .catch(err=>console.log(err));
});

router.get('/movies/new', (req,res,next)=>{
    res.render('movies/new')
})

router.post('/movies/new', (req,res,next)=>{
    Movie.create(req.body).then(
        res.redirect("/movies")
    ).catch(err => {
        console.log(err)
        res.redirect("/movies/new")
    })
})

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) => {
        res.render('movies/show', movie);
    })
    .catch(err=>console.log(err));
});

router.get('/movies/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movieInfo) => {
        res.render('movies/edit', movieInfo);
    })
    .catch((err) =>{
        console.log(err)
        next(err)
    });
});

router.post('/movies/:id/edit', (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then((updatedMovie) => {
        res.redirect(`/movies/${updatedMovie._id}`);
    })
    .catch((err) =>{
        console.log(err)
        next(err)
    });
});

router.post('/movies/:id/delete', (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/movies');
    })
    .catch((err) =>{
        console.log(err)
        next(err)
    });
});

module.exports = router;