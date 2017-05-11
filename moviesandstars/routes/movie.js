const express = require('express');
const Movie = require('../models/movie');
// require the Drone model here

const router = express.Router();


router.get('/movie', (req, res, next) => {
  // Iteration #2
  Movie.find({}, (err, movies) => {
     if (err) { return next(err) }

     res.render('movie/index', {
       listofmovies : movies
     });
   });
 });

router.get('/movie/new', (req, res, next) => {
  // Iteration #3
  res.render('movie/new')
});

router.post('/movie', (req, res, next) => {
  // Iteration #3
  const movieInfo ={
    title : req.body.titleinput,
    genre : req.body.genreinput,
    plot : req.body.plotinput,
  };
 const newMovie = new Movie(movieInfo);

 newMovie.save( (err) => {
    if (err) {
      return next(err)
    }
    return res.redirect('/movie');
  });
});

//NEW STUFF
router.get('/movie/:id', (req, res, next) => {
  const movieId = req.params.id;

   Movie.findById(movieId, (err, movie) => {
    if (err) { next(err); }
    res.render('movie/show', { movie: movie });
  });

});

router.get('/movie/:id/edit', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, movie) => {
    if (err) { next(err); }
    res.render('movie/edit',{movie: movie});
  });
});

router.post('/movie/:id', (req, res, next) => {
  const movieId = req.params.id;

  const updates = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
};

Movie.findByIdAndUpdate(movieId, updates, (err, movie) => {
  if (err){ return next(err); }
  return res.redirect('/movie');
});
});

router.get('/movie/:id/delete', (req, res, next) => {
  const id = req.params.id
  Movie.deleteOne({ _id: id }, (err) => {
    if (err) { next(err) }
    res.redirect('/movie')
  })
})

//NEW STUFF

module.exports = router;
