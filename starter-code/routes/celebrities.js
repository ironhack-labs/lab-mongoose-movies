const express = require('express');

const router = express.Router();

const Celebrity = require("../models/Celebrity");

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            console.log(celebrities) ;
            res.render("celebrities", {celebrities})
        })
        .catch(error => console.log(error))
});

router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrities => {
            console.log(celebrities.name)
            res.render("catchPhrase", {celebrity: celebrity, catchPhrase: celebrity.catchPhrase.join(" | ")})
        })
        .catch(error => console.log(error))
});

module.exports = router;