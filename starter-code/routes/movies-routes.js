const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');
const Celebrity = require('../models/Celebrity.model');



//GET "Add Form" for a new movie
router.get('/movies/new', (req, res) => {
    res.render('movies/new-movie')
});


//POST "New form" for a new movie
router.post('/movies/create', (req, res) => {
    // console.log(req.body);
    Movie.create(req.body)
        .then(createdMovieFromDb => {
            const {
                title,
                genre,
                plot,
                cast
            } = createdMovieFromDb
            // console.log('Successfully created a new celebrity', celebritiesDb)
            res.send(`
            <h2>Title: ${title}</h2>
            <h2>Genre: ${genre}</h2>
            <h2>Plot: ${plot}</h2>
            <h2>Cast: ${cast}</h2>
            `);
            // res.redirect
            //
        })
        .catch(err => console.log(`Err while creating a new movie in the DB: ${err}`))
})


module.exports = router;