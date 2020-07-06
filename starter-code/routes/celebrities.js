const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model')

/* GET home page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find({})
        .then((celebritiesFromDB) => {
            res.render('celebrities/index', { celebritiesFromDB })
        })
        .catch((error) => console.log(error))
})

module.exports = router;