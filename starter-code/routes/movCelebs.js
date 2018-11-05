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
})

router.post('/actor-assign', (req,res,next)=>{
  
  console.log('Actor Value',req.body.Actor)
  MovCeleb.create({
    movie: req.body.Movie,
    actors: req.body.Actor,
  })
  .then(movcelebs =>{
    console.log(movcelebs)
  })

})


module.exports = router;