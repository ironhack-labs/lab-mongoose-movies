const { response } = require('express');
const express = require('express');
const router  = express.Router();
const mongoose = require("mongoose")



//Importando del archivo modelo para usarlo aquí
const Celebrity = require("../models/Celebrity.js")

router.get("/", (req, res, next)=>{

    Celebrity.find({}, {name: 1})
    .then((celebrities)=>{
        res.render("celebrities/index", {celebrities})
    })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    })
})

router.get("/new", (req, res, next)=>{
    res.render("celebrities/new")
})

router.post("/new", (req, res, next)=>{

    const newCelebrity = req.body

    Celebrity.create(newCelebrity)

    .then((result)=>{
        res.redirect("/celebrities")
        console.log(result)
    })
    .catch((err)=>{
        res.redirect("/new")
        console.log(err)
    })
})

router.post("/:id/delete", (req, res, next)=>{

    const celebrityId = req.params.id

    Celebrity.findByIdAndDelete(celebrityId)
    .then(()=>{
        res.redirect("/celebrities")
    })
    .catch((err)=>{
        response.send(err)
        console.log(err)
    })
})

router.get("/:id/edit", (req,res, next)=>{
    const celebrityId = req.params.id
    Celebrity.findById(celebrityId)
    .then((result)=>{
        res.render("celebrities/edit", result)
    })
    .catch((err)=>{
        res.send(err)
    })
})

router.post("/:id", (req, res, next)=>{
    const celebrityId = req.params.id    
    const editedCelebrity = req.body
    Celebrity.findByIdAndUpdate(celebrityId, editedCelebrity)
    .then(()=>{
        res.redirect(`/celebrities/${celebrityId}`)
    })
    .catch((err)=>{
        res.send(err)
    })
})

router.get("/:id", (req, res, next)=>{
    const celebrityId = req.params.id

    Celebrity.findById(celebrityId)
    .then((result)=>{
        res.render("celebrities/show", result)
    })
    .catch((err)=>{
        res.send(err)
    })
})


module.exports = router;
