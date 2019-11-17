const express = require('express');
const router  = express.Router();

const {
  celebrityList,
  celebrityDetail,
  newCelebrityForm,
  newCelebrityPost,
  celebrityDelete,

  /*MOVIES*/
  moviesList,
  movieDetail,
  newMovieForm,
  newMoviePost,
  movieDelete
} = require("../controllers/index.controller");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* CELEBRITY */
router.get('/celebrities', celebrityList);

router.get('/celebrities/:id', celebrityDetail);

router.get('/new', newCelebrityForm);
router.post('/new', newCelebrityPost);

router.get("/celebrities/:id/delete", celebrityDelete );


/* MOVIES */
router.get('/movies', moviesList);

router.get('/movies/:id', movieDetail);

router.get('/new-movie', newMovieForm);
router.post('/new-movie', newMoviePost);

router.get('/movies/:id/delete', movieDelete);

module.exports = router;


