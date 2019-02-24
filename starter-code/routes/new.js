const express = require('express');
const app  = express();
const MyMovieModel = require('../models/movie');

app.get('/search', (req, res) => {
    const userInput = req.query;
    const newMovie = new MyMovieModel({
        title: userInput.title
    })
    newMovie.save((err) => {
        console.log(err);
    })
    res.send('movie saved');
})

module.exports = app


