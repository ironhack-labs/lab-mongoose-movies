const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity')

// router.get('/', (req, res) => res.render('celebrities/index'))

router.get('/', (req, res, next) => {

    Celebrity.find()
        .then(allCelebrities => res.render('celebrities/index', { allCelebrities }))
        .catch(err => console.log("Error en la BBDD", err))
})


router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(oneCelebrity => res.render('celebrities/show', oneCelebrity)
            .catch(err => console.log('Error while getting celebrities:', err)))
})


module.exports = router
