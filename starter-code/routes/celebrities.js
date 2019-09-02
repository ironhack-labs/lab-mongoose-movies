const express = require('express');
const mongoose = require("mongoose");
const router  = express.Router();
const Celebrity = require("./../models/celebrity");



/* GET home page */
router.get("/", (req, res, next)=> {  
  Celebrity.find().then(dbRes =>{
    // console.log(Celebrity.length);
    res.render("celebrities/index", {celebrities: dbRes});})
    .catch(err => {next(err)});
  });

//Edit celebrity(GET)  
  
router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(dbRes => {
      res.render("celebrities/edit",{celebrity:dbRes});
    })
    .catch(dbErr => {
      console.log("db error during editing", dbErr);
    });
});

//Create celebrity(GET)  
router.get("/new", (req, res)=> {
  res.render("celebrities/new");
});


//Get celebrity specs(GET)  
router.get("/:id", (req, res, next) =>{
  Celebrity.findOne({_id: req.params.id}).then(dbRes => {
    res.render("celebrities/show", {celebrity: dbRes});
    
  }).catch(err=>console.log(err))}
);

//Delete celebrity (POST)  
router.post("/:id/delete",(req,res,next)=>{
  Celebrity.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.redirect("/celebrities")
  })
  .catch((err)=>{
    next(err);
    console.log(err);
  });
});

//create new celebrity (POST)  
router.post("/celebrity", (req, res)=> {
  const infos=req.body;
  const celebrity = new Celebrity(infos);
  celebrity.save()
  .then(dbRes => {
    res.redirect("/celebrities");
  })
  .catch(dbErr =>{res.render("celebrities/new");
}); 
});

//Edit celebrity (POST)  
router.post("/:id", (req, res) => {
  const info = {name : req.body.name, occupation:req.body.occupation, catchPhrase: req.body.catchPhrase};
  // console.log(info);
  // console.log("***************")
  // console.log(req.params.id)
  Celebrity.findOneAndUpdate({_id : req.params.id},info)
    .then(dbRes => {
      console.log(dbRes, "updated!");
      res.redirect("/celebrities");
    })
    .catch(dbErr => {
      console.log(dbErr, "db error with update");
      next();
    });
});

module.exports = router;
