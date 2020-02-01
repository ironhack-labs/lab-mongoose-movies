const express = require('express');
const router  = express.Router();
const {
  celebritiesGet, 
  celebrityGet, 
  celebrityNewGet, 
  celebritiesPost,
  celebrityDelPost
} = require('../controllers/celebrities.controller')

/* GET celebrities page */
router
  .post('/', celebritiesPost)
  .post('/:id/delete', celebrityDelPost)
  .get('/', celebritiesGet)
  .get('/new', celebrityNewGet)
  .get('/:id', celebrityGet)

module.exports = router;