const express = require('express');
const router  = express.Router();

const {
  home,
  celebrities,
  showCelebrity,
  newCelebrityForm,
  newCelebrityPost,
  celebrityEditForm,
  celebrityEditPost,
  celebrityDelete,
  movies,
  showMovie,
  newMovieForm,
  newMoviePost,
  movieDelete
} = require("../controllers/controllers.js")

/* GET home page */
router.get('/', home);

// ----------Celebrities-----------
router.get('/celebrities', celebrities);
router.get('/celebrities/:id', showCelebrity);

//Create
router.get( '/new', newCelebrityForm);
router.post('/new', newCelebrityPost);

//Update
// router.get("/celebrities/:id/edit", celebrityEditForm);
// router.post("celebrities/:id/edit", celebrityEditPost)
//Delete
router.post("/celebrities/:id/delete", celebrityDelete)

// -------Movies--------
router.get('/movies', movies);
router.get('/movies/:id', showMovie);

//Create
router.get('/newMovie', newMovieForm);
router.post('/newMovie', newMoviePost);

//Delete
router.post("/movies/:id/delete", movieDelete);

module.exports = router;
