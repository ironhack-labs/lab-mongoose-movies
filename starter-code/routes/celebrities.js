var express = require('express');
var celebRouter = express.Router();
var Celebrety = require("../models/CelebModel");


//GET to edit a celeb
celebRouter.get("/:id/edit", (req, res) => {
    const {
        id
    } = req.query;
    Celebrety.findOne({
            id: id
        })
        .then(oneCeleb => {
            const data = {
                celeb: oneCeleb
            };
            res.render("./../views/celebrities/edit", data);
        })
        .catch(err => console.log(err));
})

//POST to update a celeb
celebRouter.post("/:id/edit", (req, res) => {
    const id = req.query.id;
    const {
        name,
        occupation,
        catchPrase
    } = req.body;
    Celebrety.updateOne({
            id
        }, {
            name,
            occupation,
            catchPrase
        })
        .then((data) => {
            console.log(data)
            res.redirect("/celebrities")
        })
        .catch((err) => console.log(err));
})

// POST to delet celebs
celebRouter.post("/:id/delete", (req, res) => {
    Celebrety.findByIdAndRemove(req.params.id)
        .then(() => res.redirect("/celebrities"))
        .catch((err) => console.log(err));
})

//GET new form
celebRouter.get("/new", (req, res) => {
    res.render("./../views/celebrities/new")
})

// POST from new Celeb Form
celebRouter.post("/new", (req, res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body; //deconstructing the object right away
    Celebrety.create(
        {
        name,
        occupation,
        catchPhrase
        }) //passing it over the model --> returns a promise
        .then((celeb) => {
            console.log(celeb)
            res.redirect("/celebrities")
        })
        .catch((err) => console.log(err));
})


// GET listens to /celebreties/ID and shows detail
celebRouter.get("/:id", (req, res) => {
    Celebrety.findById(req.params.id)
        .then((result) => res.render("./../views/celebrities/show", {
            result: result
        }))
        .catch(err => console.log(err));
})


// GET listens to /celebrities and shows overview
celebRouter.get("/", (req, res) => {
    Celebrety.find()
        .then((result) => res.render("./../views/celebrities/index", {
            result: result
        }))
        .catch((err) => console.log(err));
})

module.exports = celebRouter;