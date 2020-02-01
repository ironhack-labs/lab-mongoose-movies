const express = require('express');
const router  = express.Router();
const {
  celebritiesGet, 
  celebrityGet, 
  celebrityNewGet, 
  celebrityEditGet,
  celebritiesPost,
  celebrityDelPost,
  celebrityEditPost
} = require('../controllers/celebrities.controller')

/* POST / GET celebrities ROUTES */
router
  .post('/', celebritiesPost)
  .post('/:id', celebrityEditPost)
  .get('/', celebritiesGet)
  .get('/new', celebrityNewGet)
  .get('/:id/delete', celebrityDelPost)
  .get('/:id/edit', celebrityEditGet)
  .get('/:id', celebrityGet)

module.exports = router;