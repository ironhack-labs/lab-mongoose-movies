const express = require("express");

const router = express.Router();

const CelebrityModel = require("../models/Celebrity");

// const uploader = require()

//Celeb get

router.get("/new", (req, res) => {
    console.log('yo');
    // CelebrityModel.find()
    // .then((dbRes) => {
        res.render("celebrities/new-celebrity.hbs");
        
    // })
    // .catch(err => console.log(err));
});

router.post("/celebrities/create", async (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;

    try { 
       const awaitCelebModel = await CelebrityModel.create({
            name,
            occupation,
            catchPhrase
        })
        res.redirect('/celebrities');
    } catch (err) {
        next(err);
    }

    
    

})

module.exports = router;