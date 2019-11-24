const express = require('express');
const router = express.Router();
const {
  showCelebs,
  showOneCeleb
} = require('../controllers/index.controllers')



router.get('/celebrities', showCelebs)
router.get('/celebrities/:id', showOneCeleb)


module.exports = router;