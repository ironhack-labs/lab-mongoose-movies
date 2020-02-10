const express = require('express');
const router = express.Router();
const Movies = require("../models/movies");

router.get('/movies', (req, res, next) => {
    Movies.find()
        .then((mov) => {
            res.render('movies/index.hbs', {
                mov
            })
        })
})

let id

router.get('/movies/add', (req, res, next) => {
    res.render('movies/add.hbs')
})

router.get('/movies/update', (req, res, next) => {
    res.render('movies/update.hbs')
})


//this is for the movies show only
router.get('/movies/:idMov?', (req, res, next) => {
    id = req.params.idMov
    // res.json(id)
    Movies.findById(id).then((movShow) => {
        // res.json(celeb)
        res.render('movies/show.hbs', {
            movShow
        })
    })
})

router.post('/moviesPOST', (req, res, next) => {
    Movies.create({
            title: req.body.title,
            genre: req.body.genre,
            plot: req.body.plot
        })
        .then(() => {
            res.redirect('/movies')
        })
})

router.get('/moviesDEL/:idMov', (req, res, next) => {
    id = req.params.idMov
    // res.json(id)
    Movies.findByIdAndDelete(req.params.idMov)
        .then(() => {
            res.redirect('/movies')
        })
})

router.get('/movies/update/:idMov', (req, res, next) => {
    id = req.params.idMov
    Movies.findById(id)
        .then((movUpd) => {
            res.render('movies/update.hbs', {
                movUpd
            })
        })
})

router.post('/moviesUPD/:idMov', (req, res, next) => {
    id = req.params.idMov
    // res.json(id)
    Movies.findByIdAndUpdate(id, {
            title: req.body.title,
            genre: req.body.genre,
            plot: req.body.plot
        })
        .then(() => {
            res.redirect('/movies')
        })
})

module.exports = router;