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

router.get('/celebrities/:id', (req, res, next) => {

    let celebId = req.params.id;
    Celeb.findById(celebId)
    .then((details) => {
        res.render('celebrities/show', {details});
    })
    .catch((err) => {
        if (err) {
            next();
            return err
        }
    })
})

module.exports = router;