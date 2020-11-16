const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

// Endpoints
router.get('/', (req, res) => res.render('home'))

// ADD CELEBRITY
router.get('/celebrities/create', (req, res) => res.render('celebrities/new'))

router.post('/celebrities/create', (req, res) => {  
    
    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect("/celebrities"))
        .catch(err => console.log(err))
})

// ADD MOVIE
router.get('/movies/create', (req, res) => res.render('movies/new'))

router.post('/movies/create', (req, res) => {  
    
    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect("/movies"))
        .catch(err => console.log(err))
})


module.exports = router
