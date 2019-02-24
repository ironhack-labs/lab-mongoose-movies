const express = require('express');
const app  = express();
const MyMovieModel = require('../models/movie');

app.get('/new', (req, res) => res.render('new'));
app.post('/movies', (req, res,) => MyMovieModel.create(req.body, err => err ? res.status(500).send() : res.status(200).redirect('/')));

module.exports = app


