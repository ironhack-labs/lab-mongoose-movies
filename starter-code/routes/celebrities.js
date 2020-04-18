const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.js');

// GET list of celebrities
router.get('/celebrities', (req, res) => {
    Celebrity.find().then((allTheCelebs) => {
        res.render('../views/celebrities/index', {
            celebrities: allTheCelebs,
        });
    });
});


module.exports = router;
