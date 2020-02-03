const express = require('express');
const router = express.Router();
const {
  moviesGet,
  movieGet,
  moviesPost,
  moviesNewGet,
  movieDelGet,

} = require('../controller/movies.controller')

/* POST / GET movies ROUTES */
router
  .post('/', moviesPost)
  .get('/', moviesGet)
  .get('/new', moviesNewGet)
  .get('/:id/delete', movieDelGet)
  .get('/:id', movieGet)

module.exports = router;