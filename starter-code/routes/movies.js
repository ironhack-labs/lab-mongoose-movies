const Movie = require("../models/movie")
const express = require("express")
const router = new express.Router()

router.get("/movies", (req, res) => {
    Movie.find().then((dbRes) => {
        res.render("movies/index.hbs", {
            movies: dbRes
        })
    }).catch((dberr) => {
        console.log(dberr)
    })
})

router.get("/movies/new", (req, res) => {
    res.render("movies/new")
})

router.get("/movies/:id", (req, res) => {
    Movie.findById(req.params.id).then((dbRes) => {
        res.render("movies/show.hbs", {
            movie: dbRes
        })
    }).catch((dberr) => {
        console.log(dberr)
    })
})



router.post("/movies", (req, res) => {
    Movie.create(req.body).then((dbRes) => {
        Movie.find().then((dbRes) => {
            res.render("movies/index.hbs", {
                movies: dbRes
            })
        }).catch((dbErr) => {
            console.log(dbErr)
        })
    }).catch((dbErr) => {
        console.log(dbErr)
    })
})

router.post("/movies/:id/delete", (req,res)=>{
    Movie.findByIdAndDelete(req.params.id).then((dbRes)=>{
        res.redirect("/movies")
    }).catch((dbErr)=>{
        console.log(dbErr)
    })
})

router.get("/movies/:id/edit", (req,res)=>{
    Movie.findById(req.params.id).then((dbRes)=>{
        res.render("movies/edit.hbs", {
            movie:dbRes
        })
    }).catch((dbErr)=>{
        console.log(dbErr)
    })
})

router.post("/movies/:id", (req,res)=>{
    Movie.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    }).then((dbRes)=>{
        res.redirect("/movies")
    }).catch((dbErr)=>{
        console.log(dbErr)
    })
})



module.exports = router;