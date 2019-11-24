const express = require('express');
const router = express.Router();
const {
  showCelebs,
  showOneCeleb,
  addNewCeleb,
  // postCeleb
} = require('../controllers/index.controllers')



router.get('/celebrities', showCelebs)
router.get('/celebrities/:id', showOneCeleb)
router.get('/celebrities/new', addNewCeleb)
// router.post('/celebrities', postCeleb)


module.exports = router;