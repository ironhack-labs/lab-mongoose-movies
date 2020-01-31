const express = require('express');
const router  = express.Router();

const Movie = require('./../models/Movie.js');
const Celebrity = require('./../models/Celebrity.js');

/* /movies/index page */
router.get('/index', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', {movies});
    })
    .catch(error => {
      next();
    })
});

/* /movies/:id page */
router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/show', {movie});
    })
    .catch(error => {
      next();
    })
});

/* /movies/new page */
router.get('/new', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('movies/new', {celebrities});
    })
    .catch(error => {
      next();
    })

});

/* /movies/new POST data from form */
router.post('/new', async (req, res, next) => {
  try {
    
    const newMovie = {
      title : req.body.title,
      director : req.body.director,
      description : req.body.description
    }

    // If there is a celebrity tied to the movie
    if ( req.body.celebrity !== "") {
      const celeb = await Celebrity.findOne({_id:req.body.celebrity})

      // Add its id to the celebrities list
      newMovie.celebrities = [celeb._id]

      // Add its name to the stars
      newMovie.stars = [celeb.name]
    }

    const newMovieRecord = new Movie(newMovie);
    await newMovieRecord.save()

    res.redirect('index');

  } catch(error) {
    res.redirect('new');
  }
});

/* /movies/:id/delete GET data from delete link */
router.get('/:id/delete', async (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(movie => {
      res.redirect('/movies/index');
    })
    .catch(error => {
      next();
    })
});

module.exports = router;
