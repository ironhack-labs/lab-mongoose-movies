const express = require('express');
const router = express.Router();
const CelebritiesSchema = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/celebrities', async(req, res, next) => {

    await CelebritiesSchema.find().then(celebrities => {
        res.render('../views/celebrities/index', {
            celebritiesList: celebrities
        });
    }).catch(err => {
        next();
        return err;
    });
});

router.get('/celebrities/:id', async(req, res, next) => {

    await CelebritiesSchema.findOne({ _id: req.params.id }).then(celebrityFound => {
        res.render('../views/celebrities/show', {
            celebrity: celebrityFound
        });
    }).catch(err => {
        next();
        return err;
    });
});

module.exports = router;