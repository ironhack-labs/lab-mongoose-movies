const express = require("express");
const router = express.Router();

const Celebrity = require("./../models/Celebrity");

//GET /Celebrity
router.get("/", function (req, res, next) {
    Celebrity.find()
        .then(allCelebritiesFromDB => {
            res.render("celebrities/index", {
                allCelebritiesFromDB
            });
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;