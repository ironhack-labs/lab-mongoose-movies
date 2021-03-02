const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../models/Celebrity")

// GET route: /celebrities/new -> render the view new celebrity (form) at celebrities/new

router.get("/celebrities/new", (req, res, next) => {
    res.render("celebrities/new-celebrity");
});

// save the form user inputs to the database 

router.post("/celebrities/create", (req, res, next) => {
    CelebrityModel.create(req.body)
    .then(() => {
        console.log("----------------- Yay celebrity created!! ----------------")
        res.redirect("/celebrities");
    })
    .catch((error) => {
        console.log("----------------- Oups did not create the celebrity!! ----------------")
        res.render("celebrities/new-celebrity")
        next(error);
    })
});

// render the created celebrities in the /celebrities page

router.get("/celebrities", (req, res, next) => {
    CelebrityModel.find()
    .then((dbCelebrities) => {
        res.render("celebrities/celebrities", {celebrities : dbCelebrities})
    })
    .catch((error)=>{
        next(error)
    })
});




module.exports = router;