const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');




// GET /movies/
router.get('/', (req,res,next) => {
  Movie.find()
  .then(movies=>{
    res.render('movies/movies',{movies});
  })
  .catch(err => {
    next(); 
  });
});



router.get('/:id', (req,res,next) => {
  let id = req.params.id;
  Movie.findById(id)
  .populate('_actors')
  .then(movies =>{
    console.log('MOVIES', movies)
    res.render('movies/show',{movies})
  })
  .catch(err =>{
    next()
  })
})

router.get('/add-new-movie', (req,res,next)=>{
  res.render('movies/add-new-movie')
});

// /add-new GET page

router.post('/add-new-movie', (req,res,next)=>{
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
  .then(movies => {
    res.render('movies/show-new',{movies})
  })
})

// // delete celebs

router.get('/:id/delete', (req,res,next) => {
  let id = req.params.id;
  Movie.findByIdAndDelete(id)
  .then(movies =>{
    res.render('movies/show-new',{movies})
  })
})

// // edit celebs

router.get('/:id/edit', (req,res,next)=>{
  Movie.findById(req.params.id)
  .then(movies =>{

    res.render('movies/edit', {movies})
  })
  .catch(err =>{
    next()
  })
});

router.post('/:id', (req,res,next) => {
  let id = req.params.id;
  Movie.findByIdAndUpdate(id,     
    {title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
  .then(movies =>{
    res.redirect('/movies/' +movies._id)
  })
})


module.exports = router;
