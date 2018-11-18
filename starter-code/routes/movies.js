const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/movies', (req, res, next) => {

    Movie.find()
    .then((movies) => {
        res.render('movies/index', {movies});
    })
    .catch((err) => {
        next();
        return err
    })
})


router.get('/movies/:id', (req, res, next) => {

    let movieId = req.params.id;
    Movie.findById(movieId)
        .then((details) => {
            res.render('movies/show', { details });
        })
        .catch((err) => {
            if (err) {
                next();
                return err
            }
        })
})

module.exports = router;