const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity')

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(allCelebrities => {
            console.log(allCelebrities)
            res.render('celebrities/index', {
                celebrities: allCelebrities
            })
        })
        .catch(err => console.log(`An error has occurred while searching for celebrities: ${err}`))
})

router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(detailsCelebrity => {
            console.log(detailsCelebrity)
            res.render('celebrities/show', {
                celebrities: detailsCelebrity
            })
        })
        .catch(err => console.log(`An error has occurred while searching for the details: ${err}`))
})

module.exports = router;