const express = require('express');
const router  = express.Router();
const { findCelebrities, findOneCelebrity, getCreateOneCelebrity, postCreateOneCelebrity, deleteOneCelebrity, getUpdateOneCelebrity, updateOneCelebrity } = require('../controllers/celebrities.controller')

router.get('/celebrities', findCelebrities)

router.post('/celebrities', postCreateOneCelebrity)

router.get('/celebrities/new', getCreateOneCelebrity)

router.get('/celebrities/:id', findOneCelebrity)

router.post('/celebrities/:id/delete', deleteOneCelebrity)

router.get('/celebrities/:id/edit', getUpdateOneCelebrity)

router.post('/celebrities/:id', updateOneCelebrity)

module.exports = router;