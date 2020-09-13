const express = require('express')
const router = express.Router()

//Endpoinst
router.get('/', (req, res) => res.render('index'))

module.exports = router