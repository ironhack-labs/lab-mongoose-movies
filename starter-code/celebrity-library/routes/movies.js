const express = require('express');
const router  = express.Router();
const Movie    = require('../models/movie')

/* GET home page */
router.get('/movies', (req, res, next) => {

  Movie.find()
  .then((movieData)=>{
      console.log('----------got the movies ---------')
      // console.log(movieData)
      res.render('movieList', {listOfMovies: movieData})
  })
  .catch((err)=>{
    console.log('----------No movies :( ---------')
  })
});

router.get('/movies/new', (req, res, next)=>{
  res.render('newMovie');
})

router.post('/movies/create', (req, res, next)=>{

  const theTitle = req.body.title;
  const theDirector = req.body.director;
  const theStars = req.body.stars.split(',');
  const theImage = req.body.image;
  const theDescription = req.body.description;
  const theShowtimes = req.body.showtimes.split(',');

   Movie.create({
      title: theTitle,
      director: theDirector,
      stars: theStars,
      image: theImage,
      description:theDescription,
      showtimes: theShowtimes,
   })
   .then((response)=>{
       res.redirect('/movies')
   })
   .catch((err)=>{
      next(err);
   })
})

router.post('/movies/delete/:id', (req, res, next)=>{
  Movie.findByIdAndRemove(req.params.id)
  .then((response)=>{
      res.redirect('/movies')
  })
  .catch((err)=>{
     next(err);
  })

})

router.get('/movies/edit/:id', (req, res, next)=>{
  Movie.findById(req.params.id)
  .then((movieData)=>{
      res.render('editMovieInfo', {theMovie: movieData});
  })
  .catch((err)=>{
      next(err);
  })
})

router.post('/movies/update/:id', (req, res, next)=>{
  const theTitle = req.body.title;
  const theDirector = req.body.director;
  const theStars = req.body.stars.split(',');
  const theImage = req.body.image;
  const theDescription = req.body.description;
  const theShowtimes = req.body.showtimes.split(',');

   Movie.findByIdAndUpdate(req.params.id, {
    title: theTitle,
    director: theDirector,
    stars: theStars,
    image: theImage,
    description:theDescription,
    showtimes: theShowtimes,
   })
   .then((response)=>{
       res.redirect('/movies/'+req.params.id)
   })
   .catch((err)=>{
      next(err);
   })

})

router.get('/movies/:theMovieID', (req, res, next)=>{

  Movie.findById(req.params.theMovieID)
  .then((theActualMovie)=>{
      console.log('----------got ONE movies ---------')
      console.log(theActualMovie)
      res.render('MovieDetails', {theMovie: theActualMovie})

  })
  .catch((err)=>{

  })

})


module.exports = router;