const express = require('express');
const router  = express.Router();
const {celebritiesGet} = require('../controllers/celebrities.controller')

/* GET celebrities page */
router
  .get('/', celebritiesGet)

module.exports = router;