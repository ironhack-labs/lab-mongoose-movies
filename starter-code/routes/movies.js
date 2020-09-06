const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')


router.get('/', (req, res, next) => {
    Movie.find()
        .then(movieList => {
            console.log({movieList})
            res.render('movies/index', {movieList})
        })
        .catch(err => {
            next(err)
        })
})


