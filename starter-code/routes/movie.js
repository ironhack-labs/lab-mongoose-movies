const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js'); // <== add this line

/* GET home page */
router.get('/movie', (req, res, next) => {
  

  Movie.find()
  .then(movies => {
  
   console.log('Retrieved movies from DB:', JSON.stringify(movies));
   res.render('movie/index',{movies});//normalize{}
  })
  .catch(error => {
    next(error);
  })


});

router.get('/movie/:id', (req, res, next) => {


  Movie.findById(req.params.id)
  .then(movie => {

   res.render('movie/show',{celebrity});//normalize{}
  })
  .catch(error => {
    next(error);
  })


});

router.get('/movie/add/new', (req, res, next) => {

  res.render('movie/new');//normalize{}



});

router.post('/movie/add', (req, res, next) => {

  const { title, genre,plot } = req.body;
  const movie = new Movie({ title, genre, plot})
  movie.save()
  .then((movie) => {
    res.redirect('/movie');
  })
  .catch((error) => {
    console.log(error);
  })


});

router.post('/movie/:id/delete', (req, res, next) => {

  
  Movie.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect('/movie');
  })
  .catch((error) => {
    console.log(error);
  })


});

router.get('/movie/:id/edit', (req, res, next) => {


  
  Movie.findById(req.params.id)
  .then(movie => {
    res.render('movie/edit',{movie});//normalize{}
  })
  .catch((error) => {
    console.log(error);
  })





});


router.post('/movie/:id/edit', (req, res, next) => {

  const { title, genre, plot} = req.body;
  Movie.update({_id: req.params.id}, { $set: {title, genre, plot}})
  .then((movie) => {
    
    res.redirect('/movie');
  })
  .catch((error) => {
    console.log(error);
  })


});








module.exports = router;
