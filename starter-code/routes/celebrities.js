const mongoose = require("mongoose")
const Celebrity = require("./../models/celebrity");
const express = require("express")
const router = express.Router();



mongoose.connect('mongodb://localhost:27017/celebritys', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    Celebrity.find({})
    .then((celebrities)=>{
        router.get("/", (req, res)=>{
            res.render("celebrities/index", {celebrities: celebrities})
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
                res.render("celebrities/index", {celebrities: celebrities})})
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
                .then(res.render("celebrities/index", {celebrities: celebrities}))
        })
    })
    .catch(err=>{console.log(err)})
})

module.exports = router