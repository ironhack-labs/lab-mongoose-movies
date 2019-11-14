const express = require('express');
const router  = express.Router();
const MovCeleb = require('../models/MovCeleb.js');
const Movie = require('../models/Movie.js');
const Celebrity = require('../models/Celebrity.js');


router.get('/', (req,res,next)=>{

  Movie.find()
  .then(movies => {
    Celebrity.find()
    .then(celebrities =>{      
      res.render('movCelebs/main', {movies,celebrities})
    })
  })
  .catch(err =>{
    next()
  })
})

router.post('/main/actor-assign', (req,res,next)=>{
  
  console.log('Film Value',req.body._movie);
  console.log('Actor Value',req.body._actor);
  MovCeleb.create({
    _actors: req.body._actor,
    _movie: req.body._movie,
  })
  .then(()=>{
    res.redirect('/movCelebs')
  })
  
  // .then(movcelebs =>{
  //   Celebrity.findByIdAndUpdate(movcelebs._actors,
  //     {
  //       $push:{_movies: movcelebs._movie}
  //     });
  //   Movie.findByIdAndUpdate(movcelebs._movie,
  //     {
  //       $push:{_actors: movcelebs._actors}
  //     })
  //     .then(()=>{
  //       res.redirect('/movCelebs')
  //     })
  // })

})


module.exports = router;