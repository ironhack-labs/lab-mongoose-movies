const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.model');

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then((celebritiesFromDB) => {
        console.log(celebritiesFromDB);
        res.render('celebrities/index', {celebritiesFromDB});
       
    })
    .catch((error) => console.log(`An error occurred: ${error}`));
});

module.exports = router;