
const express      = require('express');
const router       = express.Router();
const Celebrity    = require('../models/Celebrity');
const Movie        = require('../models/Movie');




router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((listOfMovies)=>{

        res.json(listOfMovies)

    })
    .catch((err)=>{
        res.json(err);
    })
});



router.post('/movies/create', (req, res, next)=>{

    Movie.create({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        image: req.body.image
    })
    .then((response)=>{
        res.json(response);
    })
    .catch((err)=>{
        res.json(err);
    })

});


module.exports = router;