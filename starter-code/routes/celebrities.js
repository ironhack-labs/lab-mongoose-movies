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
    res.render("celebrities/new")
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
        .then(() => res.render("celebrities"))
        .catch(err => {
            res.redirect("celebrities/new")
        })
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