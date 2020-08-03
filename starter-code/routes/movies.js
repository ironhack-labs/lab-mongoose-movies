const express = require('express');
const router  = express.Router();
const  moviesModel= require('../models/movie');
const { response } = require('../app');

router.get('/movies', (req, res) =>{
  moviesModel.find()
      .then((movie)=> res.render('movies/index.hbs', {movie}))
      .catch((err)=> console.log ('Error', err))
  })

router.get('/movies/new', (req, res) =>{
  res.render('movies/new.hbs')
})

router.post('/movies/new', (req, res) =>{
  moviesModel.create(req.body)
    .then(()=>res.redirect('../movies'))
    .catch(()=>res.render('movies/new.hbs'))
});

router.post('/movies/:id/delete', (req, res) =>{
    moviesModel.findByIdAndDelete(req.params.id)
      .then(()=> res.redirect('/movies'))
  });
  router.post('/movies/:id/delete', (req, res) =>{
    moviesModel.findByIdAndDelete(req.params.id)
      .then(()=> res.redirect('/movies'))

    });
      router.get('/movies/:id/edit', (req, res, next) => {
        moviesModel.findById(req.params.id)
          .then((movie)=> res.render('movies/edit.hbs', {movie}))
          .catch(() => `Could not find the movie in the database`)
      });
      
router.post('/movies/:id/edit', (req, res, next) => {
   let {title, plot, genre} = req.body
   moviesModel.findByIdAndUpdate(req.params.id, {$set: {title, plot, genre}})
     .then(()=>res.redirect('../../movies'))
     .catch(()=>res.render('movies/edit.hbs', {error:true}))
      });



router.get('/movies/:id', (req, res) =>{
  moviesModel.findById(req.params.id)
        .then((movie) => res.render('movies/show.hbs', {movie}))
        .catch((err)=> console.log ('Error', err))
})



  module.exports = router;
