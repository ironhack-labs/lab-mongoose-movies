const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity_model')

/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then( celebs => {
        //console.log(celebs);
        res.render('./celebrities/index', {celebs});
    })
    .catch( err => console.log('Error while getting celebrities ', err ))
});

router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById( req.params.id)
    .then( foundCeleb => {
        //console.log(foundCeleb)
        res.render('./celebrities/show', {foundCeleb})
    })
    .catch()
})

module.exports = router;