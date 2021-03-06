const express = require("express");

const router = express.Router();

const CelebrityModel = require("../models/Celebrity");


router.get('/new', (req, res, next) => {
    res.render('movies/new-movies');
})

router.post('/create', (req, res, next) => {
    const {title, genre, plot, cast} = req.body
    CelebrityModel.create(req.body)
    .then(() => {
        res.redirect('/movies/')
    })
    .catch(err => next(err))
})


module.exports = router;