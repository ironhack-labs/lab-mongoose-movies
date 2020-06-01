const express = require("express")
const router = express.Router()
const Celebrity = require("../models/celebrity-model")

router.get("/celebrities/index", (req, res, next) => {
    Celebrity.find()
        .then(allCelebrities => res.render("celebrities/index", {
            allCelebrities
        }))
        .catch(err => console.log("An error ocurred", err))
})



router.get("/celebrities/:id", (req, res, next) => {
    Celebrity.findById().then(infoCelebrity => {
            console.log(infoCelebrity)
            res.render('celebrities/show', {
                celebrities: infoCelebrity
            })
        })
        .catch(err => console.log("An error has occurred with celebrities details", err))
})

module.exports = router;