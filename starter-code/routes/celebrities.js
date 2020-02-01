const express = require('express');
const router  = express.Router();
const celebrityModel = require("../models/Celebrity");


router.get("/info-celebrity/:id", (req, res) => {
    console.log(req.params.id);
    celebrityModel
        .findById(req.params.id)
        .then(dbRes => {
            console.log(dbRes);
            res.render("celebrities/info-celebrity", {
                celebrity: dbRes
            });
        })
        .catch(dbErr => {
            console.error(dbErr);
        })
})

router.get("/new", (req,res) => {
    res.render("celebrities/new");
})

router.post("/new", (req,res) => {
    const {name, occupation, catchPhrase} = req.body;
    celebrityModel
        .create({
            name,
            occupation,
            catchPhrase
        })
        .then(res.redirect("/celebrities"))
        .catch(dbErr => {
            res.send("Something went wrong");
        })
})

router.get("/remove/:id", (req, res) => {
    celebrityModel
        .findByIdAndDelete(req.params.id)
        .then(res.redirect("/celebrities"))
        .catch(dbErr => {
            console.error(dbErr);
        })
})


module.exports = router;