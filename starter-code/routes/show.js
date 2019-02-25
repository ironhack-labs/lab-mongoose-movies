const express = require('express');
const app  = express();
const MyMovieModel = require('../models/movie');

//show single movie
app.get('/:id', (req, res) => 
MyMovieModel.findById(req.params.id, (err, movies) => err ? res.status(500).send() : res.render('show', {movies}))
);

module.exports = app