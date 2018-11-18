const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')
const mongoose = require('mongoose');

/* GET home page */
router.get('/', (req, res, next) => {

    Celebrity.find({})
        .then(allCelebrities => {
            console.log(allCelebrities);
            return res.render('celebrities', { allCelebrities });
        })
        .catch(err => {
            console.log(err);
            next();
            return err;
        })
});


router.get('/show/:celebrityId', (req, res, next) => {

    let id = req.params.celebrityId;

    Celebrity.findById(id)
        .then(celebrityData => {
            console.log(celebrityData);
            return res.render('celebrities/show', { celebrityData });
        })
        .catch(err => {
            next();
            return err;
        })

});

module.exports = router;