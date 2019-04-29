const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie')

router.get('/movies/:id', (req, res, next) => {
  Movie.findOne().then(movieFromDB=>{
    res.render('movie', movieFromDB)
  })
});