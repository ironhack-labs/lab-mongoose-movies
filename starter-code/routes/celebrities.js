const mongoose = require("mongoose")
const Celebrity = require("./../models/celebrity");
const express = require("express")
const router = express.Router();

router.get("/", (req, res)=>{
    Celebrity.find({})
        .then((celebrities)=>{
                res.render("celebrities/index", {celebrities: celebrities})
        })
        .catch(err=>console.log(err))
})

router.get("/:id", (req, res, next)=>{
    Celebrity.findOne({_id: req.params.id})
        .then(theChosenOne=>{
            res.render("celebrities/show", {celebrities: theChosenOne})
        })
        .catch(err=>{next(); return err})
})

router.get("/add", (req, res)=>{
    res.render("celebrities/add")
})

router.post("/add", (req, res)=>{
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.create({name, occupation, catchPhrase})
        .then((newCelebrity)=>{console.log(newCelebrity);res.redirect("/cel");})
        .catch(err=>console.log(err)
        )
})

router.get("/deletDis/:id", (req, res)=>{
    Celebrity.deleteOne({_id: req.params.id})
        .then(deletion=>{console.log(deletion)
            Celebrity.find({}).then(updatedCelebrities=>{
                res.render("celebrities/index", {celebrities: updatedCelebrities})})
            })
        .catch(err=>console.log(err)
        )
})

router.get("/:id/edit", (req, res, next)=>{
    Celebrity.findOne({_id: req.params.id})
        .then(theChosenOne=>{
            console.log(theChosenOne);
            res.render("celebrities/edit", theChosenOne)})
        .catch(err=>{
            next();
            return err})
})

router.post("/:id", (req, res, next)=>{
    console.log("I'll edit");
    console.log(req.body)
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.updateOne({_id: req.params.id}, {name, occupation, catchPhrase})
        .then(updatedmovie=>{
            Celebrity.find({}).then((updatedCelebrities)=>{
                res.render("celebrities/index", {celebrities: updatedCelebrities})
            })
        })
        .catch(err=>console.log(err)
        )
})

module.exports = router