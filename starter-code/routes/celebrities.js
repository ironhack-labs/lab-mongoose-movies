const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.model.js');

router.get('/', (req, res) => {
    Celebrity.find({})
        .then(celebrities => {
            res.render('celebrities/index', {celebrities});
    })
        .catch(error => console.error(error));
})

module.exports = router;