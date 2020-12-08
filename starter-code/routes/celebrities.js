const express = require("express");
const router = new express.Router();
const CelebrityModel = require("../models/Celebrity");

//Route celebrities to show all celebrite
router.get("/celebrities", async (req, res, next) => {
    try{
        const celeb = await CelebrityModel.find();
        res.render("./celebrities/index", { celeb });
    }
    catch (err){
        next(err);
    }
});

router.get("/celebrities/new", async (req, res, next) =>{
    try {
        const newCeleb = await CelebrityModel.find();
        res.render("./celebrities/new", newCeleb);
    } catch (err) {
        next(err);
    }
});

router.post("/celebrities/new", async (req, res, next) =>{
    const newCelebPost = { ...req.body };
    try {
        await CelebrityModel.create(newCelebPost);
        res.redirect("/celebrities");
    } catch (error) {
        next(error);
    }
});


//Get the element by ID
router.get("/celebrities/:id", async (req, res, next) =>{
    try{
        const celebDetails = await CelebrityModel.findById(req.params.id);
        res.render("celebrities/show", celebDetails);
    }
    catch(err){
        next(err);
    }
});
//delete
router.post("/delete/:id", async (req, res, next) =>{
    try {
        await CelebrityModel.findByIdAndRemove(req.params.id);
        res.redirect("/celebrities");
    } catch (error) {
        next(error)
    }
});



module.exports = router;