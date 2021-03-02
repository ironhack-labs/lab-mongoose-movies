const express = require('express');
const router  = express.Router();

const celebModel = require("./../models/celebrity");

router.get("/", async (req, res, next) => {
    try {
        const celebrities = await celebModel.find() ;
        res.render("celebrities/celebrities", {celebrities})
    } catch(err) {
        next(err) ;
    }
})

router.get("/new", async (req, res, next) => {
    res.render("celebrities/new-celebrity")
})

router.post("/new", async (req, res, next) => {
    try {
        await celebModel.create(req.body) ;
        res.redirect("/celebrities")
    } catch(err) {
        console.log(err)
        res.redirect('/celebrities/new')
    }
} )


module.exports = router;
