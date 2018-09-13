const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')
const uploadCloud = require('../config/cloudinary.js');


/* GET Movies page */

  router.get('/movies', (req, res, next) => {
    Movie.find()
      .then((listOfMovies)=>{

        res.render('movieViews/index',{theList: listOfMovies})
  })
  .catch((err)=>{
    next(err);
  })

});



router.get('/movies/new', (req, res, next)=>{
  res.render('movieViews/create');

})


router.post('/movies/create', (req, res, next)=>{

  Movie.create({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
      image: req.body.image
  })
  .then((response)=>{
      res.redirect('/movies')
  })
  .catch((err)=>{
      next(err);
  })

});





router.post('/movies/delete/:id', (req, res, next)=>{


  Movie.findByIdAndRemove(req.params.id)
  .then((response)=>{
    res.redirect('/movies')
  })
  .catch((err)=>{
    next(err)
  })
})

router.get('/movies/edit/:movieID', (req, res, next)=>{
  Movie.findById(req.params.movieID)
  .then((theMovie)=>{
    res.render('movieViews/edit', {theMovie: theMovie })
  })

  .catch((err)=>{
    next(err);
  })

})

router.post('/movies/update/:movieID', (req, res, next)=>{
  Movie.findByIdAndUpdate(req.params.movieID, {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    image: req.body.image
  })
  .then((response)=>{
    res.redirect('/movies/'+req.params.movieID)
  })
  .catch((err)=>{
    next(err)
  })


})


router.get('/movies/:theid', (req, res, next)=>{

  Movie.findById(req.params.theid)
  .then((theMovie)=>{
    res.render('movieViews/show', {movie: theMovie})
  })
  .catch((err)=>{
     next(err);
  })

})


router.get('/fancypage', (req, res, next)=>{
  res.render('movieViews/fancy.hbs')
})


router.get('/api/movies', (req, res, next) => {
  Movie.find()
    .then((listOfMovies)=>{
      res.json(listOfMovies)

})
.catch((err)=>{
  res.json(err);
})

});


module.exports = router;
