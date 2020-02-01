const express = require('express');
const router  = express.Router();
const {celebritiesGet, celebrityGet} = require('../controllers/celebrities.controller')

/* GET celebrities page */
router
  .get('/', celebritiesGet)
  .get('/:id', celebrityGet)

module.exports = router;