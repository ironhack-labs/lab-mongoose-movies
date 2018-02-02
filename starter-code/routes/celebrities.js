
const express = require('express');
const router = express.Router();

const celebrity = require('../models/celebrity');

/* GET home page. */
router.get('/celebrities', function (req, res, next) {
    celebrity.find({}, (err, result) => {
        if (err) {
            console.log('error');
            next(err);
        }
        else {
            // let celebArr = [{
            //     celebs: name
            // }];
            res.render('index', { celebs: name});
        }
    });
});

module.exports = router;
