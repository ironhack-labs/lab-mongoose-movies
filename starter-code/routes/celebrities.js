const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js');

/* GET celebrities page */
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(allCelebrities => {
        res.render('celebrities/index', {celebrities: allCelebrities});
    }).catch(error => {
        next(error);
    });
});

module.exports = router;