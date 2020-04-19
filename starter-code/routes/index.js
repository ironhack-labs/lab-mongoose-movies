const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// celeb routes
const {
  listCelebrities,
  showCelebrity,
  addCelebrity,
  showNewCelebrityform,deleteCelebrity,
} = require('../controllers/celebrities');

router.get('/celebrities', listCelebrities);
router.get('/celebrities/new', showNewCelebrityform);
router.post('/celebrities', addCelebrity);
router.get('/celebrities/:id', showCelebrity);
router.post('/celebrities/:id/delete', deleteCelebrity);


// movie routes
const {
  listMovie,
  showMovie,
  addMovie,
  showNewMovieform,deleteMovie,
} = require('../controllers/movies');

router.get('/movies', listMovie);
router.get('/movies/new', showNewMovieform);
router.post('/movies', addMovie);
router.get('/movies/:id', showMovie);
router.post('/movies/:id/delete', deleteMovie);


module.exports = router;
