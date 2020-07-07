const express = require("express");
const router = new express.Router();
const celebrityModel = require("./../models/Celebrity");

router.get("/", async (req, res, next) => {
    try {
        const celebrities = await celebrityModel.find();
        res.render("celebrities/index", {celebrities});
    }catch(err){
        next(err);
    }
});

router.get("/new", (req, res) => {
    res.render("celebrities/new");
});

router.get("/:id", async (req, res, next) => {
    try{
        res.render("celebrities/show", await celebrityModel.findById(req.params.id));
    } catch(err){
        next(err);
    }
});

router.post("/new", async (req, res, next) => {
    try {
        await celebrityModel.create(req.body);
        res.redirect("/celebrities");
    } catch (err) {
        next(err);
    }
})

router.get("/delete/:id", async (req, res, next) => {
    try {
        await celebrityModel.findByIdAndDelete(req.params.id);
        res.redirect("/celebrities");
    } catch (err) {
        next(err);
    }
})

router.get("/edit/:id", async (req, res, next) => {
    try {
        res.render("celebrities/edit", await celebrityModel.findById(req.params.id));
    } catch (err) {
        next(err);
    }
});

router.post("/edit/:id", async (req, res, next) => {
    try {
        await celebrityModel.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/celebrities");
    } catch (err) {
        next(err);
    }
})


module.exports = router;