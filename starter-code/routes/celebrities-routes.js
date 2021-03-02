const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../model/celebrity-model");


// Add new celebrities:

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

// Show all celebrities:

router.get("/", (req, res) => {
    CelebrityModel.find()
    .then((allCeleb) => {
        res.render("celebrities/celebrities", {allCeleb})
    })
    .catch((err) => console.log(err))
})

// See the details of a specific celebrity

router.get("/:id", (req, res, next) => {
    CelebrityModel.findById(req.params.id)
    .then((celeb) => res.render("celebrities/celebrity-details", {celeb}))
    .catch(next)
})

// Update existing celebrities

router.get("/:id/edit", (req, res, next) => {
    CelebrityModel.findByIdAndUpdate(req.params.id)
    .then((celeb) => res.render("celebrities/edit-celebrities", {celeb}))
    .catch(next)
})

router.post("/:id/edit", (req, res, next) => {
    CelebrityModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((celeb) => res.redirect("/celebrities"))
    .catch(next)
})

//Delete celebrities

router.post("/:id/delete", (req, res, next) => {
    CelebrityModel.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/celebrities"))
    .catch(next)
})

module.exports = router;