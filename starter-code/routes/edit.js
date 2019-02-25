const express = require('express');
const app  = express();
const MyMovieModel = require('../models/movie');

//go to the form to update the movie
app.get('/:id/edit', (req, res) => {
    MyMovieModel.findById(req.params.id, (err, movies) => err ? res.status(500).send() : res.render('edit', {movies}))
  });

//edit the movie with user input and redirect back to movies overview
app.post('/:id/edit', (req, res) => {
    MyMovieModel.findByIdAndUpdate(req.params.id, req.body, err => err ? res.status(500).send() : res.status(200).redirect('/'));
});

module.exports = app