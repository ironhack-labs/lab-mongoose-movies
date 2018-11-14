const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies');

router.get('/movies', (req, res, next) => {
    Movies.find()
        .then((allMovies)=>{
            console.log('=-=-=-=-=-=-=-=-=',allMovies)
            res.render('views-movies/movies', {allMovies});
    })
        .catch((err)=>{
            next(err);
    })
});

module.exports = router;
