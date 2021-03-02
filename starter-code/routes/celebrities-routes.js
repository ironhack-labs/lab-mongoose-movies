const express = require('express');
const router  = express.Router();

//celebrity model
const CelebrityModel = require('./../models/celebritiesModel');

//CELEBRITIES HOME GET
router.get('/', (req, res, next) => {
    CelebrityModel.find()
    .then(dbSuccess => {
        res.render('celebrities/celebrities', {celebrities : dbSuccess});
    })
    .catch(err => next(err));
});

//CREATE GET
router.get('/new', (req, res, next) => {
    res.render('celebrities/new-celebrity')
});

//CREATE POST
router.post('/create', (req, res, next) => {
    CelebrityModel.create(req.body)
    .then(() => res.redirect('/celebrities'))
    .catch(err => {
        res.render('celebrities/new-celebrity');
    });
});


module.exports = router;