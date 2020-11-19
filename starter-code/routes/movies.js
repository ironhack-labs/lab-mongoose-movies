const express = require('express');
const Movie = require('../models/Movies');
const router = express.Router();
const Movies = require('../models/Movies');



// GET ALL MOVIES LIST
router.get('/', (req, res, next) => {
    Movies.find({}, {title: 1})
    .then((movies) => {
      console.log(movies)
      res.render('./movies/index', {movies});
      
    })
    .catch((err) => {
      console.log(err)
      res.render('error')
    })
    
  })

// RENDER NEW MOVIE FORM
router.get('/new', (req, res, next)=>{
  res.render('./movies/new');
});


//CREATE NEW MOVIE  
router.post('/', (req, res, next)=>{
  const {title, genre, plot} = req.body
  Movie.create({title: title, genre: genre, plot: plot})
      .then((result)=>{
        console.log(result);
        res.redirect('/movies');
      })
      .catch((err)=> {
        console.log(err)
        res.render('error');
      })
});


// GET MOVIES INFO
router.get('/:id', (req, res, next) =>{
    const id = req.params.id
    Movie.findById(id)
    .then((result)=>{
      res.render('./movies/show', result);
    })

    .catch((err)=> {
      console.log(err)
      res.render('error')
  })
})


// DELETE MOVIE
router.post('/:id/delete', (req, res, next) =>{
  const id = req.params.id
  Movie.findByIdAndRemove(id)
  .then(()=>{
    res.redirect('/movies');
  })
  .catch((err)=> {
      console.log(err)
      res.render('error')
  })
})


// RENDER EDIT MOVIE FORM
router.get('/:id/edit', (req, res, next)=>{
  const id = req.params.id
  Movie.findById(id)
  .then((result)=>{
      res.render('./movies/edit', result)
  })
  .catch((err)=>{
      console.log(err)
      res.render('error')
  })
  
})


//EDIT MOVIE  
router.post('/:id/edit', (req, res, next)=>{
  const id = req.params.id
  const editedMovie = req.body
  Movie.findByIdAndUpdate(id,  editedMovie)
  .then(()=>{
    res.redirect('/movies')
  })
  .catch((err)=>{
    console.log(err)
    res.render('error')
  })

})


  
module.exports = router;
