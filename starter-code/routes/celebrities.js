const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.js');

//GET celebrities page

router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(allCelebsFromDB => {
            console.log(`${allCelebsFromDB}, celebrities.js`)
            res.render('celebrities/index', {
                celebrities: allCelebsFromDB
            })
        })
        .catch((err) => console.log('Error while displaying the celebs', err))
});

module.exports = router;