const express = require("express");
const Celebrity = require("../models/Celebrity.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
    Celebrity
        .find()
        .then((celebrities) => {
            console.log(celebrities)
            res.render("celebrities/index", {celebrities})} )
})

module.exports = router;
