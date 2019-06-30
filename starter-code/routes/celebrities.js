const express = require('express');
const router  = express.Router();
const { findCelebrities, findOneCelebrity, getCreateOneCelebrity, postCreateOneCelebrity } = require('../controllers/celebrities.controller')

router.get('/celebrities', findCelebrities)

router.post('/celebrities', postCreateOneCelebrity)

router.get('/celebrities/new', getCreateOneCelebrity)

router.get('/celebrities/:id', findOneCelebrity)

module.exports = router;