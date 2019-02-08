const express = require('express');
const router  = express.Router();
let Movie = require('../models/Movie')


router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect('/movies')
  })
  .catch(e=>next(e))
})


router.post('/new', (req, res, next) => {
  Movie.create(req.body)
  .then(()=>{
    res.redirect("/movies")
  })
  .catch(()=>res.render("movies/new", {message:"Error: try again"}))
})

router.get('/new', (req, res, next) => {
  res.render('movies/new')
})


router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movs=>{
    res.render('movies/show',movs)
  })
  .catch(e=>next(e))
})


router.get('/', (req, res, next) => {
  Movie.find()
  .then(movs=>{
    res.render('movies/index',{movs})
  })
  .catch(e=>next(e))
});

module.exports = router;