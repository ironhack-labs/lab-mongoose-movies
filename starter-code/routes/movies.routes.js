const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

// --- GET MOVIES ---

router.get('/movies', (req, res, next) =>
    
    Movie.find()
        .then(allTheMovies => res.render('../views/movies/movielist.hbs', { allTheMovies }))
        .catch(err => console.log("Error al leer BBDD", err))
)


// --- REMOVE MOVIE ---

router.post('/movies/:id/delete', (req, res) => {
    Movie
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log("Error al leer BBDD", err))

            })

// --- MOVIE DETAILS ---


router.get('/movies/:id', (req, res, next) =>

    Movie.findById(req.params.id)
    .then(theMovie => res.render('../views/movies/moviedetails.hbs', {
        theMovie
    }))
    .catch(err => console.log("Error al leer BBDD", err))
)



// --- ADD MOVIES ----

router.get('/moviesnew', (req, res, next) => res.render('movies/moviesnew') 
)

router.post('/moviesnew', (req, res) => {

    const { title, genre, plot} = req.body

    Movie
        .create(req.body)
        .then(() => res.redirect('/movies'))
        .catch(err => {
            console.log("Try Again", err)
            res.redirect('/')
            next()
            
        })


})




module.exports = router