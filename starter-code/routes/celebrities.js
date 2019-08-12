const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity')


router.get("/celebrities", (req, res, next) =>{
    Celebrity.find()
    .then(theCelebrities => {
        console.log("The data is: ",theCelebrities);
        res.render("celebrities/index", {theCelebrities})
    })
    .catch(err => console.log("An error just happened ", err))
} )

router.get("/celebrities/new", (req, res, next) =>{
        res.render("celebrities/new")
    })

    router.post("/celebrities/create", (req, res, next) => {
        Celebrity.create(req.body)
        .then(newCele =>{
            console.log("New Celebrity was successfully added ", newCele)
            res.redirect("/celebrities")
        } )
        .catch(err => console.log("An error ocurred while creating new Celebrity", err))
    })

router.get("/celebrities/:theId", (req, res, next) =>{
    Celebrity.findById(req.params.theId)
    .then(singleCelebrity => {
        console.log("The data is: ",singleCelebrity);
        res.render("celebrities/show", {celebrity: singleCelebrity})
    })
    .catch(err => console.log("An error just happened ", err))
} )

module.exports = router;