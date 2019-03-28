const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res) => {
    Celebrity.find()
    .then(celebrities => {
        res.render("celebrities/index", {celebrities})
    })
    
})

router.get("/celebrities/new", (req, res) => {
    res.render("celebrities/new")
})

router.get("/celebrities/:id", (req, res)=>{
    const {id} = req.params;
    Celebrity.findById(id)
    .then(celebrity => {
        res.render("celebrities/detail", celebrity);
    })
})

router.post("/celebrities", (req, res) => {
    Celebrity.create(req.body)
    .then(celebrity => {
        res.redirect(`/celebrities/${celebrity._id}`)
    })
})

router.post("/celebrities/:id/delete", (req, res) => {
    const {id} = req.params;
    Celebrity.findByIdAndRemove(id)
    .then(() => {
        res.redirect("/celebrities")
    })
})

module.exports = router;