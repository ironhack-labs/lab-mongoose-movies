/* GETcelebrity page */
const express = require('express');
const router = express.Router();
const celebrityModel = require('../models/celebrity.js')

// ***** Showing all celebrities *******
router.get("/celebrities", (req, res) => {
    celebrityModel.find({})
        .then(dbRes => {
            res.render("celebrities", { dbRes })
            dbRes.forEach((c) => console.log(c.name))
        })
        .catch(err => res.render(console.log("there is an error : ", err)))
}
)

// ***** Showing a particular celebrity *******
router.get("/celebrities/:id", (req, res) => {
    celebrityModel.findById(req.params.id)
        .then(c => {
            res.render("show", { c })
        })
        .catch(err => res.render(console.log("ERROR WHEN FINDING A CELEBRITY: ", err)))
})

// ***** Adding a new celebrity *******
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
                console.log(`celebrity ${dbRes.name} created`);
                res.redirect("/celebrities")})
        .catch( (err) => {
                console.log("error", err);
                res.redirect("/")
    })
})

// ***** Deleting an existing celebrity *******

router.get("/celebrities/:id/delete", (req, res) =>{
    celebrityModel.findByIdAndRemove(req.params.id)
        .then(c => res.redirect("/celebrities"))
        .catch(err => res.redirect("/celebrities"))  
})

// ***** Editing an existing celebrity *******

router.get("/celebrities/:id/edit", (req, res, next) =>{
    celebrityModel.findById(req.params.id)
        .then(c => {
            res.render("edit", {c})
            console.log(`editing ${c.name}`)
            })
        .catch(next)
})


router.post("/celebrities/:id/", (req, res, next) =>{
    const {name, occupation, catchPhrase}=req.body;

    celebrityModel.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase})
        .then( (dbRes)=>{
                    console.log(`celebrity ${dbRes.name} updated, new catch Phrase : ${dbRes.catchPhrase}`);
                    res.redirect("/celebrities")
                   }
            )
        .catch(next)
        
})



module.exports = router;
