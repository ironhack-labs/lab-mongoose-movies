const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.js');
const movies_controller = require('../controllers/movie.js');

/* GET movies page */
router.get('/', movies_controller.getAllMovies);

/*POST movie*/
router.post('/', movies_controller.createMovie);

/*GET movies add details page*/
router.get('/new', movies_controller.addDetails);

/*POST update movie*/
router.post("/:id", movies_controller.updateMovie);

/*POST delete movie*/
router.post('/:id/delete', movies_controller.deleteMovie);

/*GET movies edit details page*/
router.get('/:id/edit', movies_controller.editDetails);


/*GET movies details page*/
router.get('/:id',movies_controller.detailsMovie);

module.exports = router;