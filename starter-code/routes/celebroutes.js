const express = require('express');
const router = express.Router();
const {
  showCelebs
} = require('../controllers/index.controllers')



router.get('/celebrities', showCelebs)

module.exports = router;