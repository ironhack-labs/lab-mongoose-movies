const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')
const mongoose = require('mongoose');

/* GET home page */
router.get('/', (req, res, next) => {

    Celebrity.find({})
        .then(allCelebrities => {
            console.log(allCelebrities);
            return res.render('celebrities/', { allCelebrities });
        })
        .then(() => {
            mongoose.connection.close()
            console.log('Conection close');
        })
        .catch(err => {
            console.log(err);
            next();
        })


});

module.exports = router;