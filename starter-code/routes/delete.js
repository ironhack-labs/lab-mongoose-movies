const express = require('express');
const app  = express();
const MyMovieModel = require('../models/movie');

app.get('/delete/:id', (req, res, next) => {


    MyMovieModel.findByIdAndDelete(req.params.id, (err) => {
      if(err) {
        console.log(err)
      } else {
        res.send('Deleted')
        next();
      }
    }, (err) => {
        err ? console.log(err) : res.redirect('index');

    })
  })

module.exports = app

