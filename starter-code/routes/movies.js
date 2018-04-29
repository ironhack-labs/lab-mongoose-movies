const express = require('express');
const app = express()
const router  = express.Router();
const Movie = require('../models/Movie')


router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies=>{
    res.render('./movies/index',{movies})
  })
  .catch(err=>{
    console.log(err);
  })
});

router.get('/new', (req, res) => {
  res.render('./movies/new')
})

router.post('/new', (req, res) => {
  let newMovie = new Movie(req.body)
  newMovie.save()
  .then(()=>res.redirect('/movies'))
  .catch((err)=>{
    console.log(err);
    res.render('./movies/new')
  })
})

router.get('/:id',(req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie=>{
    res.render('./movies/show', movie)
  })
  .catch(err=>{
    console.log(err);
  })
});

router.post('/:id/delete',(req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(()=>res.redirect('/movies'))
    .catch((err)=>console.log(err)) 
});

router.get('/:id/edit',(req, res, next)=>{
  Movie.findById(req.params.id)
  .then((movie)=>res.render('./movies/edit',movie))
  .catch((err)=>console.log(err))
})

router.post('/:id',(req, res, next)=>{
  let objUpdate = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }
  Movie.findByIdAndUpdate(req.params.id, objUpdate)
  .then(()=>res.redirect('/movies'))
  .catch((err)=>console.log(err))
})


module.exports = router;