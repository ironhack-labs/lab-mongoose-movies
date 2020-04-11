const express = require('express')
const router = express.Router()
const celebrity = require('../models/celebrity')

// Locate the /celebrities GET route in routes/celebrities.js.

router.get('/', (req, res, next) => {
    celebrity.find()
})
// ITERATION 3 HELP