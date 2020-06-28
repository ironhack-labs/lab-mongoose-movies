const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))
router.use('/celebrities', require('./celebrities.js'))
router.use('/movies', require('./movies.js'))

module.exports = router
