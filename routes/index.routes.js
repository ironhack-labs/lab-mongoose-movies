const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))


router.use('/celebrities', require('./celebrities.routes.js'))
router.use('/movies', require('./movies.routes.js'))

module.exports = router