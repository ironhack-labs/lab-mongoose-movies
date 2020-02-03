const express = require('express');
const router  = express.Router();
const {
  moviesGet,
  movieGet,
  moviesPost,
  moviesNewGet,
  movieDelGet,
  movieEditPost,
  movieEditGet
} = require('../controllers/movies.controller')

/* POST / GET movies ROUTES */
router
  .post('/', moviesPost)
  .post('/:id', movieEditPost)
  .get('/', moviesGet)
  .get('/new', moviesNewGet)
  .get('/:id/delete', movieDelGet)
  .get('/:id/edit', movieEditGet)
  .get('/:id', movieGet)

module.exports = router;