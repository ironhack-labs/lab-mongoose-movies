const express = require('express');
const router  = express.Router();
celebrities = require('./celebrities');
movies = require('./movies');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

newCelebrityForm(router);

findCelebrities(router);

findCelebrityById(router);

addNewCelebrity(router);

deleteCelebrity(router);

updateCelbrityForm(router);

updateCelebrity(router);

newMovieForm(router);

addNewMovie(router);

findMovies(router);

findMovieById(router);

deleteMovie(router);

updateMovieForm(router);

updateMovie(router);

module.exports = router;
