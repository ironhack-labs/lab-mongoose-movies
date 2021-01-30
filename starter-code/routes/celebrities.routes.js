const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');

//Path to list celebrities
router.get('/celebrities', (req, res) => {
    Celebrity.find()
        .then(celebsFound => res.render('celebrities/index', {celebrities: celebsFound}))
        .catch(err => console.log(`Error while displaying celebrities: ${err}`))
})

module.exports = router;