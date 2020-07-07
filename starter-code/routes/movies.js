const MovieModel = require("./../models/Movie");
const express = require("express");
const router = new express.Router();

router.get("/", async (req, res, next) => {
    try {
        const movies = await MovieModel.find();
        res.render("movies/index", {movies});
    }catch(err){
        next(err);
    }
});

router.get("/new", (req, res) => {
    res.render("movies/new");
});

router.get("/:id", async (req, res, next) => {
    try{
        res.render("movies/show", await MovieModel.findById(req.params.id));
    } catch(err){
        next(err);
    }
});

router.post("/new", async (req, res, next) => {
    try {
        await MovieModel.create(req.body);
        res.redirect("/movies");
    } catch (err) {
        next(err);
    }
})

router.get("/delete/:id", async (req, res, next) => {
    try {
        await MovieModel.findByIdAndDelete(req.params.id);
        res.redirect("/movies");
    } catch (err) {
        next(err);
    }
})

router.get("/edit/:id", async (req, res, next) => {
    try {
        res.render("movies/edit", await MovieModel.findById(req.params.id));
    } catch (err) {
        next(err);
    }
});

router.post("/edit/:id", async (req, res, next) => {
    try {
        await MovieModel.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/movies");
    } catch (err) {
        next(err);
    }
})


module.exports = router;