const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");

router.get("/", (req, res, next) => {
    //console to know if it enters the route
    //console.log("Hi there");
    Movie.find()
    //once is in the route, render index-view
    .then(allTheMovies => {
        console.log('you did it')
        res.render("movies/index-view", {allTheMovies})})
        .catch(err => {
            next()
            console.log("Ha habido un PROBLEMA!", err)
            return error
        });});

router.get("/new", (req, res, next) => res.render("movies/new"))

router.post('/new', (req, res, next) => {
    console.log('hola');
    
    const {title, genre, plot } = req.body
    
    Movie.create({title, genre, plot })
    .then(() => res.redirect('/movies'))
    .catch(err => {
        next()
        console.log("Ha habido un PROBLEMA!", err)
        return error
    });})



router.post('/:id/delete', (req, res, next) => {

    const {title, genre, plot } = req.body

    Movie.findByIdAndRemove(req.params.id, {title, genre, plot })
    .then(movieUpdt => res.redirect(`/movies`))
    .catch(err => {
        next()
        console.log("Ha habido un PROBLEMA!", err)
        return error
    })
})

router.get('/edit/:id', (req, res, next) => {

    Movie.findById(req.params.id)
        .then(movieEdited => res.render('movies/edit', movieEdited))
        .catch(err => {
            next()
            console.log("Ha habido un PROBLEMA!", err)
            return error
        })
})

router.post('/edit/:id', (req, res, next) => {

    const {title, genre, plot } = req.body

    Movie.findByIdAndUpdate(req.params.id, {title, genre, plot }, { new: true })
        .then(theUpdatedMovie => res.redirect(`/movies`))
        .catch(err => {
            next()
            console.log("Ha habido un PROBLEMA!", err)
            return error
        })
})

router.get('/:id', (req, res , next) => {
    Movie.findById(req.params.id)
    .then(moveDetails => res.render('movies/show', {moveDetails}))
    .catch(err => {
        next()
        console.log("Ha habido un PROBLEMA!", err)
        return error
    });
})

module.exports = router;
