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

router.post('/:id/delete',(req,res)=>{
  Movies.findByIdAndRemove(req.params.id)
  .then(movies=>{res.redirect('/movies')})
})

router.get('/:id/edit',(req,res)=>{
  Movies.findById(req.params.id)
  .then(movie=>{res.render('movieEdit',movie)})
})

router.post('/:id/edit',(req,res)=>{
  Movies.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(movie=>{return res.redirect(`/movies/${req.params.id}`)})
})

module.exports = router;
