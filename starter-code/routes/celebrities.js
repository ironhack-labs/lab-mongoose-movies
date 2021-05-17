const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
    .then((dbCelebs) => {
        res.render("celebrities/index", {Celebs: dbCelebs})
    })
    .catch(error => next(error));
})

module.exports = router;