const express = require("express");

const router = new express.Router();

const CelebrityModel = require("../models/Celebrity");

// const uploader = require()

//Celeb get

router.get("/celebrities/new", (req, res) => {
    CelebrityModel.create()
    .then((dbRes) => {
        res.render("/celebrities/new-celebrity", {celebrity: dbRes});
        console.log('yo');
    })
    .catch(err => console.log(err));
})

