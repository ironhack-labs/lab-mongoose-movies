const express      = require('express');
const router       = express.Router();
const Celebrity    = require('../models/celebrity');
const Movie        = require('../models/movie');



router.get('/movies', (req, res, next)=> {
  Movie.find()
  .then((ret)=> {
    res.json(ret)
    
  })
  .catch((err)=> {
    res.json(err)
  })
});

router.post('/movies/create', (req, res, next)=>{
  let newTitle = req.body.movieTitle;
  let newGenre = req.body.movieGenre;
  let newPlot = req.body.moviePlot;
  let newStar = req.body.movieStar;
  // console.log('>>>>><<<<<<<<')
  // console.log(newStar);
 
  Movie.create({
    title: newTitle,
    genre: newGenre,
    plot: newPlot,
    stars: [newStar]
 
  })
  .then((ret)=> {
    res.json(ret)
  })
  .catch((err)=> {
    res.json(err)
  })
 })

module.exports = router;