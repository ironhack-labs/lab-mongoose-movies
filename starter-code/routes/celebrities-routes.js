const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../model/celebrity-model");


// add new celebrities:

router.get("/new", (req, res) => {
    res.render("celebrities/new-celebrity")
})

router.post("/create", (req, res) => {
    CelebrityModel.create(req.body)
    .then((celeb)=> {
        console.log(celeb);
        res.redirect("/celebrities");
    })
    .catch((err) => {
        console.log(err);
        res.render("celebrities/new-celebrity");
    })
})

//Show all celebrities:

router.get("/", (req, res) => {
    CelebrityModel.find()
    .then((allCeleb) => {
        res.render("celebrities/celebrities", {allCeleb})
    })
    .catch((err) => console.log(err))
})

module.exports = router;