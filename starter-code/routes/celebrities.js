const express = require ("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.Model");

router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
    .then(celebsFromDB => {
        res.render("./celebrities/index.hbs", {celebrities: celebsFromDB})
    })
    .catch(err => console.log(err))
});

module.exports = router;
