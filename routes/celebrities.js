const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity')

// router.get('/', (req, res) => res.render('celebrities/index'))

router.get('/', (req, res) => {

    Celebrity
        .find()
        .then(allCelebrities => res.render('celebrities/index', { allCelebrities }))
        .catch(err => console.log("Error en la BBDD", err))
})



module.exports = router
