const express = require('express');
const router = express.Router();

const Celeb = require('../models/celeb');


/* GET home page */
router.get('/celebrities', (req, res, next) => {
    console.log(Celeb.find())
    Celeb.find()
        .then((celebs) => {
            res.render('celebrities/index', { celebs })
        })
        .catch((err) => {
            if (err) {
                next();
                return err
            }
        })
});

module.exports = router;