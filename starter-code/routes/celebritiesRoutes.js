const express = require("express");

const router = express.Router();

const CelebrityModel = require("../models/Celebrity");

// const uploader = require()

//Celeb get

router.get("/new", (req, res) => {
    console.log('yo');
    res.render("celebrities/new-celebrity.hbs");
});

router.post("/create", async (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    console.log('------------- entrée dans router post create yayyyy ---------------');
    try {
        console.log('------------- entrée dans TRYYYYYY ---------------');
        await CelebrityModel.create({
            name,
            occupation,
            catchPhrase
        })
        console.log('------------- entrée dans MODEL.CREATE ---------------');
        res.redirect('/');
    } catch (err) {
        next(err);
    }
});

module.exports = router;