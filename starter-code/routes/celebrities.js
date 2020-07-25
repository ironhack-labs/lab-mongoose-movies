const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.js');

//IT 2
//GET celebrity list page
router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(allCelebsFromDB => {
            console.log(`${allCelebsFromDB}, celebrities.js`)
            res.render('celebrities/index', {
                celebrities: allCelebsFromDB
            })
        })
        .catch((err) => {
            console.log('Error while displaying the celebs', err)
            next(err)
        })
});

//IT 3
//GET celebrities/:id  para ver info específica
router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(thisCelebDB => {
            console.log(`${thisCelebDB}, celebrities.js`);
            res.render('celebrities/show', {
                thisCeleb: thisCelebDB
            })
        })
        .catch((err) => {
            console.log('Error while displaying an specific celeb', err)
            next(err)
        })
});

module.exports = router;