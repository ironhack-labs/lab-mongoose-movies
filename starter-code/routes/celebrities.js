const express = require('express')
const router = express.Router()
const Celebrity = require('../models/celebrity')

//lista de celebrities

router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(allCelebs => res.render('celebrities/index', { allCelebs }))
        .catch(err => console.log('Error', err))
})

module.exports = router