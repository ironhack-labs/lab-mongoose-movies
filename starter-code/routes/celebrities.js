const express = require('express');
const router  = express.Router();
const {
  celebritiesGet, 
  celebrityGet, 
  celebrityNewGet, 
  celebritiesPost
} = require('../controllers/celebrities.controller')

/* GET celebrities page */
router
  .get('/', celebritiesGet)
  .get('/new', celebrityNewGet)
  .get('/:id', celebrityGet)
  .post('/', celebritiesPost)

module.exports = router;