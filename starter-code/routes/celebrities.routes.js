const express = require("express")
const router = express.Router()

const Celebrity = require("../models/celebrity.model")


//Celebrity list
router.get('/', (req, res) => {
    Celebrity.find()
        .then(celebrities => res.render('celebrities/index', {celebrities}))
        .catch(err => console.log('ERROR:', err))
})

//Add
router.get("/new", (req, res) => res.render("celebrities/new"))

router.post("/new", (req, res) => {
    const { name, occupation, catchPhrase } = req.body
    
    Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect("/celebrities"))
    .catch(err => console.log('ERROR:', err))
})

//Delete
router.post("/:celebrity_id/delete", (req, res) => {
    const celebrityId = req.params.celebrity_id

    Celebrity.findByIdAndDelete(celebrityId)
        .then(() => res.redirect("/celebrities"))
        .catch(err => console.log('ERROR:', err))
})

//Edit
router.get("/:celebrity_id/edit", (req, res) => {
    const celebrityId = req.params.celebrity_id

    Celebrity.findById(celebrityId)
        .then((foundCelebrity) => res.render("celebrities/edit", foundCelebrity))
        .catch(err => console.log('ERROR:', err))
})

router.post("/:celebrity_id", (req, res) => {
    const celebrityId = req.params.celebrity_id

    const { name, occupation, catchPhrase } = req.body

    Celebrity.findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
        .then(() => res.redirect("/celebrities"))
        .catch(err => console.log('ERROR:', err))
})

//Details
router.get("/:celebrity_id", (req, res) => {
    const celebrityId = req.params.celebrity_id

    Celebrity.findById(celebrityId)
        .then(foundCelebrity => res.render("celebrities/show", foundCelebrity))
        .catch(err => console.log('ERROR:', err))
})


module.exports = router