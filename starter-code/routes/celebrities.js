const express = require('express');
const router = express.Router();
const {
  celebritiesGet,
  celebrityGet,
  celebrityNewGet,
  celebritiesPost,
  celebrityDelGet,
} = require('../controller/celebrities.controller')


router
  .post('/', celebritiesPost)
  .get('/', celebritiesGet)
  .get('/new', celebrityNewGet)
  .get('/:id/delete', celebrityDelGet)
  .get('/:id', celebrityGet)


module.exports = router;