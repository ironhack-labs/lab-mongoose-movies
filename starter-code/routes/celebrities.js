/* GETcelebrity page */
const express = require('express');
const router = express.Router();
const celebrityModel = require('../models/celebrity.js')

router.get("/celebrities", (req, res) => {
    celebrityModel.find({})
        .then(dbRes => {
            res.render("celebrities", { dbRes })
            dbRes.forEach((c) => console.log(c.name))
        })
        .catch(err => res.render(console.log("there is an error : ", err)))
}
)

router.get("/celebrities/:id", (req, res) => {
    celebrityModel.findById(req.params.id)
        .then(c => {
            res.render("show", { c })
        })
        .catch(err => res.render(console.log("ERROR WHEN FINDING A CELEBRITY: ", err)))
})


router.get("/new", (req, res) => {
    res.render("new");
    });
  
router.post("/celebrities", (req, res) =>{
    console.log("@post");
    console.log(req.body); 
    //res.send("you've logged in !")
    //res.render('/celebrities');

    const {name, occupation, catchPhrase}=req.body;

    celebrityModel.create({ name, occupation, catchPhrase})
        .then( (dbRes)=>{
                console.log("celebrity-created, name of the celebrity created: ", dbRes.name);
                res.redirect("/celebrities")})
        .catch( (err) => {
                console.log("error", err);
                res.redirect("/")
    })
})


module.exports = router;
