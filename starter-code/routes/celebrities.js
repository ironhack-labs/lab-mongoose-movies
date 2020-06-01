const express = require("express")
const router = express.Router()
const Celebrity = require("../models/celebrity.js")

router.get("/", (req, res, next) => {
    Celebrity.find()
        .then(allCelebrities => res.render("celebrities/index", {
            allCelebrities
        }))
        .catch(err => console.log("An error ocurred", err))
})

router.get("/new", (req, res, next) => {
    Celebrity.find()
        .then(allCelebrities => res.render("celebrities/new", {
            allCelebrities
        }))
})

router.post("/new", (req, res, next) => {

    const {
        name,
        occupation,
        catchPhrase
    } = req.body;
    const newCelebrity = new Celebrity({
        name,
        occupation,
        catchPhrase
    })
    newCelebrity.save()
        .then(() => res.render("/"))
        .catch(err => {
            res.redirect("/new")
        })
})

router.post('/:id/delete', (req, res, next) => {
    console.log(req.params.id)
    Celebrity.findByIdAndRemove(req.params.id)
        .then(() => res.redirect("/celebrities"))
        .catch(err => console.log("Error rying to delete a celeb", err))
})




router.get("/:id", (req, res, next) => {
    Celebrity.findById(req.params.id).then(infoCelebrity => {
            console.log(infoCelebrity)
            res.render("celebrities/show", {
                celebrities: infoCelebrity
            })
        })
        .catch(err => console.log("An error has occurred with celebrities details", err))
})

module.exports = router;