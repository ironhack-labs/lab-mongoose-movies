const express = require("express");
const router = express.Router();

const {
  showCelebs,
  showOneCeleb,
  addNew,
  postNew
} = require('../controllers/index.controllers.js')



router.get('/celebrities', showCelebs)
router.get('/celebrities/:id', showOneCeleb)
router.get('/new', addNew)
router.post('/new', postNew)


module.exports = router;