const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity_model')

/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then( celebs => {
        console.log(celebs);
        res.render('./celebrities/index', {celebs});
    })
    .catch( err => console.log('Error while getting celebrities ', err ))
});

module.exports = router;