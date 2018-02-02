
const express = require('express');
const router = express.Router();

const celebrity = require('../models/celebrity');

/* GET home page. */
router.get('/', (req, res, next) => {
    Celebrity.find({}, (err, celebritiesArray) => {
        if (err) {
            console.log('error');
            return next(err);
        }
        
        res.render('/celebrities/index', {
            tittle: 'Celebrity Inventory',
            celebrities: celebritiesArray
        });
    });
});

module.exports = router;
