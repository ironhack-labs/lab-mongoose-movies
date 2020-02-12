const express = require("express");
const router = new express.Router();
const celebrityModel = require("../models/celebrity");

router.get("/celebrities/new", (req,res) => {
    res.render("/celebrity/new");
});

router.post("/celebrities/new", (req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    celebrityModel
        .create({
            name,
            occupation,
            catchPhrase
        })
        .then(dbRes => res.redirect("celebrities/index"))
        .catch(dbErr => {
            console.log(dbErr);
            res.send("OH No, an error occured while creating new celebrity !");
        });
});

router.get("/celebrity/:id", (req, res) => {
    celebrityModel
    .findById(req.params.id)
    .then(celebrity => {
        res.render("celebrities/show", { celebrity });
    })
    .catch(dbErr => console.error ("Oh no, db err :", dbErr));
});

router.get("celebrities/new/delete/:id", (req, res) => {
    celebrityModel
        .findByIdAndRemove(req.params.id)
        .then(dbRes => {
            res.redirect("/celebrities/index");
        })
        .catch(dbErr => {
            console.error(dbErr);
        });
});