const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity')

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then((allCelebrities) => {
            console.log(allCelebrities)
            res.render('celebrities/index', {
                celebrities: allCelebrities
            })
        })
        .catch(err => console.log(`An error has occurred while searching for celebrities: ${err}`))
})

module.exports = router;