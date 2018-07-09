const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((result) => {
            res.render('movies/index', {result});//this result is making an array an object, which is the celebrity array
        })
        .catch((err)=>{
            next(err);
        })
});