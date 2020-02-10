var express = require('express');
var router = express.Router();
var Celebrety = require("../models/CelebModel");


// POST to delet celebs
router.post("/:id/delete", (req, res) => {
    console.log("logged ", req.body)
    const id = req.body;
    Celebrety.findByIdAndRemove(_id)
    .then( () => res.redirect("/celebrities"))
    .catch( (err) => console.log(err));
})

// POST from new Celeb Form
router.post("/new", (req, res) => {
    const {
        name,
        occupation,
        catchPrase
    } = req.body; //deconstructing the object right away
    Celebrety.create({
            name,
            occupation,
            catchPrase
        }) //passing it over the model --> returns a promise
        .then((celeb) => {
            console.log(celeb)
            res.redirect("/celebrities")
        })
        .catch((err) => console.log(err));
})

//GET new form
router.get("/new", (req, res) => {
    res.render("./../views/celebrities/new")
})


// GET listens to /celebreties/ID and shows detail
router.get("/:id", (req, res) => {
    Celebrety.findById(req.params.id)
        .then((result) => res.render("./../views/celebrities/show", {
            result: result
        }))
        .catch(err => console.log(err));
})


// GET listens to /celebrities and shows overview
router.get("/", (req, res) => {
    Celebrety.find()
        .then((result) => res.render("./../views/celebrities/index", {
            result: result
        }))
        .catch((err) => console.log(err));
})

module.exports = router;