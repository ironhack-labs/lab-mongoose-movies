const express = require('express');
const app  = express();
const MyMovieModel = require('../models/movie');

app.get('/delete/:id', (req,res) => {
    // const userInput = req.query;

    MyMovieModel.findByIdAndDelete(req.params.id, (err) => {
      if(err) {
        console.log(err)
      } else {
        res.send('Deleted')
      }
    })
  })

module.exports = app