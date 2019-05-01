const express = require('express');
const router = express.Router();
const movies = require('../models/movies');


//Get titles
router.get('/movies', (req,res,next) =>{ 
  movies.find().then( movies =>{  
    console.log(movies)
    res.render('movies/index', {movies}) 
  })
})


//Get each movies

router.get('/views/movies/show/:identification', (req,res,next) =>{ 
  movies.findById(req.params.identification).then( movies =>{  
    console.log(movies)
    res.render('movies/show', {movies}) 
  })
  .catch ((error)=>{
    console.log("Error");
  })
})

//New

router.get('/views/movies/new', (req, res, next) => {
  res.render('movies/new')
})


router.post('/views/movies/new', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new movies({ title, genre, plot});
  newMovie.save()
  .then(movies => {
    console.log('Saved!')
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  })
});






router.get("/movies/delete", (req, res, next) => {
  movies.findByIdAndRemove(req.query.movie_id)
    .then((movies) => {
      res.redirect("/movies");
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;



