//As always, require EXPRESS!
const express = require('express');
//Now require the MODEL to be able to send and receive database data via our routes 
const Celebrity = require('../models/celebrity');
//Finally, iniate and require EXPRESS' Router to make things happen!
const router  = express.Router();

router.get("/celebrities", (req, res, next) => { 
    //Check if we go into the request
    console.log("I AM IN!!!!!!!!!");
    
    Celebrity.find({}, (err, theCelebritiesRetrieved) => {
    if(err){
        return next(err);
    }
    res.render("celebrities", { theCelebritiesRetrieved })//PASS tobeRendered AS AN OBJECT! );
    })
});
//Always export the module VARIABLE from each route. In this case it's the router!
module.exports = router;