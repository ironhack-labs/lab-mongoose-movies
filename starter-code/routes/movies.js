const express = require('express');
const router = express.Router()
const Movies = require('../models/Movies');


router.get('/movies', (req, res, next) => {
    Movies.find()
        .then(mov => {
            res.render('movies/show', { mov })
        })
        .catch(err => {
            next(err)
            console.log(err)
        })

})


router.get('/movies/new', (req, res, next) => {
    res.render("movies/new")

})

router.post("/movies/create", (req, res, next) => {
    Movies.create(req.body)
        .then(mov => {
            res.redirect('/movies')
        })
        .catch(err => {
            next(err)
            console.log(err)
        })
})


// DELETE

router.post("/movies/:id/delete", (req, res, next) => {
    Movies.findByIdAndDelete(req.params.id)
        .then(mov => res.redirect('/movies'))
        .catch(err => {
            next(err)
            console.log(err)
        })
})

// UPDATE

router.get("/movies/:id/edit", (req, res, next) => {
    Movies.findById(req.params.id)
        .then(movie => res.render("movies/edit", { movie }))
})


router.post("/movies/:id/edited", (req, res, next) => {
    Movies.findByIdAndUpdate(req.params.id, req.body)
        .then(res.redirect('/movies'))
        .catch(err => {
            next(err)
            console.log(errs)
        })
})





// DISPLAY MOVIE DETAILS PAGE
router.get('/movies/:id', (req, res, next) => {
    Movies.findById(req.params.id)
        .then(mov => res.render('movies/details', { mov }))
        .catch(err => {
            next(err)
            console.log(err)
        })
})



module.exports = router