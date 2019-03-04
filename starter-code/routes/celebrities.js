const express = require ("express")
const router = express.Router()

const Celebrity = require('../models/Celebrity')

router.get("/", (req, res, next) =>{ //falta el next
    Celebrity.find()
    .then(celebrities => res.render("celebrities/index", {celebrities}) )
    .catch(err => console.log('Error', err))
})
router.get("/info/:id", (req, res) =>{
    Celebrity.findById(req.params.id)
    .then(celebrity => res.render("celebrities/show", {celebrity}))
})

router.get("/new", (req, res) =>{
    
 res.render("celebrities/new")
})

router.post("/new", (req, res) =>{
    const {name, occupation, catchPhrase} = req.body
    const celebrity = new Celebrity({name, occupation, catchPhrase})

    celebrity.save()
    .then(newCelebrity => res.redirect("/celebrities"))
    .catch(err => res.render("celebrities/index"))
})

router.post("/:id/delete", (req, res) =>{
    Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity => res.redirect("/celebrities"))
})

module.exports = router;
