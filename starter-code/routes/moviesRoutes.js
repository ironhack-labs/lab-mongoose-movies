const express = require("express");

const router = express.Router();

const CelebrityModel = require("../models/Celebrity");


router.get('/new', (req, res, next) => {
    CelebrityModel.find()
    .then((dbRes) => {
        res.render('movies/new-movies', {myCelebrities : dbRes})
    })
    .catch(err => next(err))
})

router.post('/create', (req, res, next) => {
    const {title, genre, plot, cast} = req.body
    CelebrityModel.create(req.body)
    .then((dbRes) => {
        res.redirect('/movies/', {newMovie: dbRes})
    })
    .catch(err => next(err))
})


module.exports = router;