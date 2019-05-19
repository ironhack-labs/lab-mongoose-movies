const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')



/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    console.log(movies)
    res.render('movies/index', {
      movies
    });
  })
  .catch(err=>{
    next()
    return err
  })
});


router.get('/:id', (req,res)=>{
  Movie.findById(req.params.id)
  .then(movie=>{
    console.log(movie)
    res.render('movies/show', {movie})
  })
})

router.post('/:id', (req,res)=>{
  const {
    title,
    genre,
    plot
  } = req.body

  Movie.findByIdAndUpdate(req.params.id, {
      title,
      genre,
      plot
    })
    .then(movie => {
    console.log('movie actualizado', movie)
    res.redirect('/movies')
  }).catch(err=>{
     next()
     return err
    
  })
})

router.get('/add/new', (req,res)=>res.render('movies/new'))
router.post('/add/new', (req, res) => {
  const {
    title,
    genre,
    plot
  } = req.body

  //console.log(req.body)
  const newMovie = new Movie({
    title,
    genre,
    plot
  })
  newMovie.save()
  .then(
    movie => {
      res.redirect('/movies')
    }
  )
  .catch(err=> {
    res.render('movies/new', {errmsg: "There was an error, try again"})
  })
})


router.get('/:id/delete', (req,res)=>{
  Movie.findByIdAndDelete(req.params.id)
  .then(movie=>{
    console.log(movie)
    res.redirect('/movies')
  })
  .catch(err=>{
    console.log(err)
    next()
    return err
   })
})


router.get('/:id/edit', (req, res)=>{
  Movie.findById(req.params.id)
  .then(movie=>{
    res.render('movies/edit', {movie})
  })
})
module.exports = router;
