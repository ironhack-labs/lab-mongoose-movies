const express = require('express');
const router  = express.Router();
const Movie    = require('../models/movie')
const Celebrity    = require('../models/celebrity')

/* GET home page */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((movieData)=>{
      console.log('----------got the movies ---------')
      console.log('=-=-=-=-=-=-=-=-=-', req.session)
      res.render('movieList', {listOfMovies: movieData, theUser: req.session.currentUser})
  })
  .catch((err)=>{
    console.log('----------No movies :( ---------')
  })
});

router.get('/movies/new', (req, res, next)=>{
  if(!req.session.currentUser){
    res.redirect('/movies')
    return
  }
  Celebrity.find()
    .then((allTheCelebrities)=>{
      // console.log(allTheCelebrities)
        res.render('newMovie', {celebrityList: allTheCelebrities});
    })
    .catch((err)=>{
        next(err);
    })

})

router.post('/movies/create', (req, res, next)=>{
    
  const theTitle = req.body.title;
  const theDirector = req.body.director;
  let theStars = req.body.stars;
  if (theStars === '') {theStars = []}
  const theImage = req.body.image;
  const theDescription = req.body.description;
  const theShowtimes = req.body.showtimes.split(',');
  console.log(theStars)
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
    Celebrity.find()
    .then((allTheCelebrities)=>{
      // console.log(allTheCelebrities)
        res.render('editMovieInfo', {theMovie: movieData, celebrityList: allTheCelebrities});
    })
    .catch((err)=>{
        next(err);
    })
  })
  .catch((err)=>{
      next(err);
  })
})

router.post('/movies/update/:id', (req, res, next)=>{
  const theTitle = req.body.title;
  const theDirector = req.body.director;
  let theStars = req.body.stars;
  if (theStars === '') {theStars = []}
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
//.populate('stars')
  Movie.findById(req.params.theMovieID).populate('stars')
  .then((theActualMovie)=>{
      console.log('----------got ONE movie ---------')
      console.log(theActualMovie.stars)
      res.render('MovieDetails', {theMovie: theActualMovie})

  })
  .catch((err)=>{
    console.log(err)
    next(err);
  })

})


module.exports = router;