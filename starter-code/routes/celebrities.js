const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity.js');

router.get("/celebrities", (req, res, next) => {
    Celebrity
        .find()
        .then((data) => {
            res.render("celebrities/index",{data});
        })
        .catch((err) => {
            next();
            console.log(err);
        })
})

router.get("/celebrities/:id", (req, res, next) => {
    let { id } = req.params;
    Celebrity
        .findById(id)
        .then((data) => {
            res.render("celebrities/show",data);
        })
        .catch((err) => {
            next();
            console.log(err);
        })
})

router.get("/new-celebrities", (req, res, next) => {
    res.render("celebrities/new");
})

router.post("/celebrities", (req, res, next) => {
    Celebrity
        .create(req.body)
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => {
            res.render("celebrities/new");
            console.log(err);
        })
})

router.get("/celebrities/:id/delete", (req, res, next) => {
    let { id } = req.params;
    Celebrity
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect("/celebrities");
        })
        .catch((err) => {
            next();
            console.log(err);
        })
})


router.get("/celebrities/edit/:id/", (req, res, next) => {
    let { id } = req.params;
    Celebrity
    .findById(id)
    .then(() => {
        res.render("celebrities/edit", {id});
    })
    .catch((err) => {
        next();
        console.log(err);
    })
})

router.post("/celebrities/edit/:id", (req, res, next) => {
    let { id } = req.params;
    Celebrity
        .findByIdAndUpdate(id, req.body)
        .then(() => {
            res.redirect("/celebrities");
        })
        .catch((err) => {
            next();
            console.log(err);
        })
})

module.exports = router;
