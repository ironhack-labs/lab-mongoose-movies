const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');

/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(allCelebrities => {
        res.render('celebrities/index', {celebrities: allCelebrities})
    })
    .catch(err => {
        console.log(('Error while searching for celebrities: ', err))
    })
});

module.exports = router;