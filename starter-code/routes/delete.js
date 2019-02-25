const express = require('express');
const app  = express();
const MyMovieModel = require('../models/movie');

app.get('/:id/delete', (req,res) => {
    MyMovieModel.findByIdAndDelete(req.params.id, (err) => {
      err ? console.log(err) : res.send('Deleted')
    }, (err) => err ? console.log(err) : res.redirect('index'))})

module.exports = app

