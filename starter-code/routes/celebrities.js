const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity')

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then((allCelebrities) => {
        console.log('YAY, celebs!')
        res.render('../views/celebrities/celebList.hbs', {allCelebrities})
    })
    .catch(err => console.log('There was an error with the celebrities!', err))
})
