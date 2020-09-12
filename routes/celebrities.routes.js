const express = require('express')
const router = express.Router()

const Celebrity = require("../models/celebrity.model")

// Index celebrities
router.get("/", (req, res) => {
    Celebrity.find()
        .then(allCelebrities => res.render("celebrities/index", {allCelebrities} ))
        .catch(err => console.log(`Ups, an error: ${err}`))    
})

// Add new celebrity
router.get("/new", (req, res) => res.render("celebrities/new"))

router.post("/new", (req, res) => {
    const { name, ocupation, catchPhrase } = req.body
    
    Celebrity.create({ name, ocupation, catchPhrase })
        .then(() => res.redirect("/celebrities"))
        .catch(err => console.log(`Ups, an error: ${err}`))
})

// Delete a celebrity
router.post("/:celebrity_id/delete", (req, res) => {
    const celebrityId = req.params.celebrity_id

    Celebrity.findByIdAndDelete(celebrityId)
        .then(() => res.redirect("/celebrities"))
        .catch(err => console.log(`Ups, an error: ${err}`))
})

// Edit a celebrity
router.get("/:celebrity_id/edit", (req, res) => {
    const celebrityId = req.params.celebrity_id

    Celebrity.findById(celebrityId)
        .then(foundCelebrity => res.render("celebrities/edit", foundCelebrity))
        .catch(err => console.log(`Ups, an error: ${err}`))
})

router.post("/:celebrity_id/new", (req, res) => {
    const celebrityId = req.params.celebrity_id

    const { name, ocupation, catchPhrase } = req.body
    
    Celebrity.findByIdAndUpdate(celebrityId, {name, ocupation, catchPhrase})
        .then(() => res.redirect("/celebrities"))
        .catch(err => console.log(`Ups, an error: ${err}`))
})

// View a celebrety detail
router.get("/:celebrity_id", (req, res) => {
    const celebrityId = req.params.celebrity_id

    Celebrity.findById(celebrityId)
        .then(foundCelebrity => res.render("celebrities/show", foundCelebrity))
        .catch(err => console.log(`Ups, an error: ${err}`))
})


module.exports = router