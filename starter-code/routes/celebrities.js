const express = require('express');
const Celeb = require('../models/Celebrity');
const router = express.Router();



router.get("/celebrities", (req, res, next) => {
    Celeb.find()
        .then((celebrities) => {
            //console.log(celebrities)
            res.render("celebrities/index", {celebrities})

        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
});

router.get("/celebrities/:celebrityId", (req, res, next) => {
    
    Celeb.findById(req.params.celebrityId)
        .then((details) => {

            res.render("celebrities/show", {details})

        })
        .catch(err => {
            console.log(`Error: ${err}`)
            next()
        });
});

module.exports = router;