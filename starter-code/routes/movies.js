const express = require('express');
const router = express.Router();
const Movies= require('../models/Movie');

/* GET users listing. */

router.get('/', (req, res, next) => {
  Movies.find()
  .then (movies =>{
    res.render('movies/index', {movies});
  })
  .catch((error) =>{
    console.log(error);
  })
});

// create
router.get('/new' ,(req,res,next) =>{
  res.render('movies/new');
})

router.post('/', (req, res, next) => {
  const info = req.body;
  Movies.collection.save(info)
  .then (result =>{
    res.redirect('movies');
  })
  .catch((error) =>{
    console.log(error);
  })
});

// delete  movie
router.post('/:id/delete', (req,res,next) =>{
  const id= req.params.id;
  Movies.findByIdAndDelete(id)
  .then(result => {
    res.redirect('/movies');
  })
  .catch(error => {
    console.log(error);
  })
})

//edit
router.get('/:id/edit' ,(req,res,next) =>{
  const id = req.params.id
  Movies.findById(id)
  .then((movies) =>{
    res.render('movies/edit', {movies});
  })
  .catch((error) => {
    Console.log(error);
  })
})
router.post('/:id', (req,res,next) =>{
  const id= req.params.id;
  const info= req.body;
  console.log(id);
  Movies.findByIdAndUpdate(id, info)
  .then(result => {
    res.redirect('/movies');
  })
  .catch(error => {
    console.log(error);
  })
})


//list
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Movies.findById(id)
  .then (movies =>{
    res.render('movies/show', {movies: movies});
  })
  .catch((error) =>{
    console.log(error);
  })
});





module.exports = router;
