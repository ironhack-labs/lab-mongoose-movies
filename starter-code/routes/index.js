const express = require('express');
const router = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', celebritiesController.list);
router.get('/movies', celebritiesController.movieList);

router.get('/celebrity/create', celebritiesController.createCelebrity);
router.post('/celebrity/create', celebritiesController.doCreateCelebrity);

router.get('/movie/create', celebritiesController.createMovie);
router.post('/movie/create', celebritiesController.doCreateMovie);

router.get('/celebrity/:id/edit', celebritiesController.editCelebrity);
router.post('/celebrity/:id/edit', celebritiesController.doEditCelebrity)

router.get('/movie/:id/edit', celebritiesController.editMovie);
router.post('/movie/:id/edit', celebritiesController.doEditMovie)

router.get("/celebrity/:id/delete", celebritiesController.deleteCelebrity);
router.post("/celebrity/:id/delete", celebritiesController.doDeleteCelebrity);

router.get("/movie/:id/delete", celebritiesController.deleteMovie);
router.post("/movie/:id/delete", celebritiesController.doDeleteMovie);

router.get('/celebrity/:id', celebritiesController.celebrityDetail);
router.get('/movie/:id', celebritiesController.movieDetail);



module.exports = router;
