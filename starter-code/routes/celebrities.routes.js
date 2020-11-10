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

module.exports = router;