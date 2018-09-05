const express = require('express');
const router  = express.Router();
const Celebrities = require("../models/celebrity.js")

/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
    Celebrities.find()
    .then(celebrityResults => {
        res.locals.celebrityList = celebrityResults
        res.render('celebrities.hbs');
        //res.send(req.params);
    })
    .catch(err => next(err))
});

// GET celebrities ID page
router.get('/celebrities/:celebrityId', (req, res, next) => {
    const {celebrityId} = req.params;
    console.log(req.params)
    Celebrities.findById(celebrityId)
    .then(celebrityData => {
    res.locals.celebrityItem = celebrityData
    res.render('celebrity-infos.hbs');
    })
    .catch(err => next(err));
})

// GET new celebrities
router.get('/celebrities/new', (req, res, next) => {
    res.render("new-celebrity.hbs")
    // Not finished
})


module.exports = router;
