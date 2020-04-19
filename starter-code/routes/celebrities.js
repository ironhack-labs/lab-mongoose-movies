const Celebrity = require("../models/celebrity")
const express = require('express');
const router = new express.Router();

router.get("/celebrities", (req, res) => {
    Celebrity.find().then((dbResult) => {
        console.log(dbResult)
        res.render("celebrities/index.hbs", {
            celebrities: dbResult
        })
    }).catch((dbErr) => {
        console.log(dbErr)
    })
})

router.get("/celebrities/new", (req, res) => {
    res.render("celebrities/new")
})

router.get("/celebrities/:id", (req, res) => {
    Celebrity.findById(req.params.id).then((dbResult) => {
        console.log(dbResult)
        res.render("celebrities/show", {
            celebrity: dbResult
        })
    }).catch((dbErr) => {
        console.log(dbErr)
    })
})



router.post("/celebrities", (req, res) => {
    Celebrity.create(req.body).then((dbRes) => {
        Celebrity.find().then((dbRes) => {
            res.render("celebrities/index", {
                celebrities: dbRes
            })
        }).catch((dbErr) => {
            console.log(dbErr)
        })

    }).catch((dbErr) => {
        res.render("celebrities/new")
    })
})

router.post("/celebrities/:id/delete", (req, res) => {
    Celebrity.findByIdAndDelete(req.params.id).then((dbRes) => {
        res.redirect("/celebrities")
    }).catch((dbErr) => {
        console.log(dbErr)
    })
})

router.get("/celebrities/:id/edit", (req, res) => {
    Celebrity.findById(req.params.id).then((dbRes) => {
        res.render("celebrities/edit", {
            celebrity: dbRes
        })
    }).catch((dbErr) => {
        console.log(dbErr)
    })
})

router.post("/celebrities/:id", (req, res) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }).then((dbRes) => {
        res.redirect("/celebrities")
    }).catch((dbErr) => {
        console.log(dbErr)
    })
})

module.exports = router;