const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')


/* GET home page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then((allCelebrities) => {
            console.log(allCelebrities)
            res.render('celebrities/index', { celebs: allCelebrities })
        })
        .catch((err) => {
            next(err);
        })
})


router.get('/celebrities/details/:theid', (req, res, next) => {
    let id = req.params.theid

    Celebrity.findById(id)
        .then((celebrityObject) => {
            console.log(celebrityObject)
            res.render('celebrities/details', { theCelebrity: celebrityObject })
        })
        .catch((err) => {
            next(err);
        })
})

module.exports = router;