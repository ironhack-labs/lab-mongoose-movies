const express = require('express');
const router  = express.Router();
const {
  moviesGet
} = require('../controllers/movies.controller')

/* POST / GET movies ROUTES */
router
  .get('/', moviesGet)

module.exports = router;