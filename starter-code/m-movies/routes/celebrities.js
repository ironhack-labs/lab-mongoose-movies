//As always, require EXPRESS!
const express = require('express');
//Now require the MODEL to be able to send and receive database data via our routes 
const Celebrity = require('../models/celebrity');
//Finally, iniate and require EXPRESS' Router to make things happen!
const router  = express.Router();

router.get("/", (req, res, next) => { 
    //Check if we go into the request
    console.log("I AM IN!!!!!!!!!");

    Celebrity.find({}, (err, theCelebritiesRetrieved) => {
    if(err){
        return next(err);
    }
    res.render("celebrities/index", { theCelebritiesRetrieved })//PASS tobeRendered AS AN OBJECT! );
    })
});


//Render the create new celeb form
router.get("/new", (req, res, next) => {
    res.render("celebrities/new");
});

//send new celebrity data to the server via post
router.post("/new", (req, res, next) => { 
    const newCelebInfo = {
    name : req.body.name,
    occupation : req.body.occupation,
    catchPhrase : req.body.catchPhrase,
}

    const newCeleb = new Celebrity(newCelebInfo);
        
    newCeleb.save((err) => {
        if(err){
            return next(err);
        }
        res.redirect("/celebrities");
        })
});


//go to each celebrities profile page
router.get("/:id", (req, res, next) => { 
    const celebId = req.params.id;
        Celebrity.findById(celebId, (err, celeb) => {
    if(err){
        return next(err);
    }
    res.render("celebrities/profile", {celeb});
    })
});


//delete celebrity
router.post("/:id/delete", (req, res, next) => {
    const celebId = req.params.id;

    Celebrity.findByIdAndRemove(celebId, (err) => {
        if(err){
            return next(err);
        }
        res.redirect("/celebrities");
    })
});

router.get("/:id/edit", (req, res, next) => { 
    const celebId = req.params.id;

    Celebrity.findById(celebId, (err, celeb) => {
    if(err){
        return next(err);
    }
    res.render("celebrities/edit", {celeb});
    });
});

router.post("/:id", (req, res, next) => {
    const celebId = req.params.id;
    const updates = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    };
    Celebrity.findByIdAndUpdate(celebId, updates, false, (err, celebUpdated) => {
        console.log("The id to be edited is:::: ", celebId);
        if(err){
            return next(err);
        }
        return res.redirect("/celebrities");
    });
});


//Always export the module VARIABLE from each route. In this case it's the router!
module.exports = router;