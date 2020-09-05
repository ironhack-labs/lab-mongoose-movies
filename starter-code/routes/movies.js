const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get('/', (req, res, next) => {
    Movie.find()
        .then(data => {
            console.log(data)
            res.render('movies/index', {data})
        })
        .catch(err => {
            next(err)
        })
})



module.exports = router