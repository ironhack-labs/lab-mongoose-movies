const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity.model");

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then((dbCelebs) => res.render('celebrities/index', {
            dbCelebs
        }))
        .catch((error) => console.log(`There was an error: ${error}`))
})


router.get('/celebrities/:id', (req, res, next) => {
    const {
        id
    } = req.params
    Celebrity.findById(id)
        .then((oneCeleb) => {
            console.log(oneCeleb),
                res.render('celebrities/show', oneCeleb)
        })
        .catch((error) => console.log(`There was an error, while trying to find celeb: ${error}`))
})

module.exports = router;