const express = require('express');
const router  = express.Router();
const {
  moviesGet,
  movieGet
} = require('../controllers/movies.controller')

/* POST / GET movies ROUTES */
router
  .get('/', moviesGet)
  .get('/:id', movieGet)

module.exports = router;