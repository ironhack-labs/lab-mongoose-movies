const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((result) => {
            res.render('movies/index');//this result is making an array an object, which is the celebrity array
        })
        .catch((err)=>{
            next(err);
        })
});

router.get('/movies/new', (req, res, next) => {//just renders the new and doesn't include the changes. idk why they are split
    res.render('movies/new')
});

router.post('/movies/create', (req, res, next) => {
    //keys for creating a new guy
    const newMovie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    });

    //saves to database

    newMovie.save()
        .then((response) => {
            res.redirect('/movies')//redirects to the page of celebrities
        })
        .catch((err) => {
            res.render('movies/new')//if error, reload page
        })
});


//id is interchangable
router.get('/movies/:id', (req, res, next) => {
    const id = req.params.id;
    Movie.findById(id)
        .then((result) => {

            res.render('movies/show', result);//result is the id i think
        })
        .catch((err) => {
            next(err);
        })
});

router.post('/movies/:id/delete', (req, res, next) => {
    // const id = req.params.id;//saves the id for use
    console.log('id: ============== ', req.params.id);
    Movie.findByIdAndRemove(req.params.id)
        .then((response) => {
            res.redirect('/movies');
        })
        .catch((err) => {
            next(err);
        })
});

router.get('/movies/:id/edit', (req, res, next) => {
    const id = req.params.id;
    Movie.findById(id)
        .then((result) => {

            res.render('movies/edit', result);//result is the id i think
        })
        .catch((err) => {
            next(err);
        })
});

router.post('/movies/:id', (req, res, next) => {
    const id = req.params.id;//saves the id for use
    Movie.findById(id)
        .then((result) => {
            Movie.update(result);
        })
        .catch((err) => {
            next(err);
        })
});

module.exports = router;
