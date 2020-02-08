const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')


router.get('/', (req, res) =>
    res.render('index', )
)

module.exports = router;