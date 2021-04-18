const express = require('express');
const Celebrity = require('../models/Celebrity.model');
const router = express.Router();

router.get('/', (req, res) => {
    Celebrity.find({})
        .then(celebrities => {
            res.render('celebrities/index', {celebrities});
        })
        .catch(error => console.error(error))
});

module.exports = router;