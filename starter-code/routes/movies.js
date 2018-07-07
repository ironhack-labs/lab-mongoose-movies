const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies');

router.get('/',(req,res)=>{
  Movies.find()
  .then(movies=>{res.render('movies',{movies})})
  .catch(err=>{console.log(err)});
})

router.post('/',(req,res)=>{
  Movies.create(req.body)
  .then(movies=>{res.redirect('/movies')})
})

router.get('/:id',(req,res)=>{
  let movieId = req.params.id;
  Movies.findById(movieId)
  .then(movies=>{res.render('movieInfo',movies)})
  .catch(err=>{console.log(err)});
})

module.exports = router;
