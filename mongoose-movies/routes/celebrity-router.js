const express = require('express');

const router  = express.Router();

const CelebrityModel=require("../models/celebrity-model");

router.get("/celebrities",(req,res,next)=>{
    CelebrityModel.find().exec()
      .then((celebrityResults)=>{
        res.locals.celebrityList=celebrityResults;
        res.render("celebrity-views/index.ejs");
      })
      .catch((err)=>{
        console.log("ERROR!");
        next(err);
      });
});//GET Celebrity List Page



router.get("/celebrities/new", (req,res,next)=>{
  res.render("celebrity-views/new.ejs");
});

router.get("/celebrities/:id",(req,res,next)=>{
  CelebrityModel.findById(req.params.id)
    .then((celebrityFromDb)=>{
        res.locals.celebrityDetails=celebrityFromDb;
        res.render("celebrity-views/show");
        //return the promise of the the next database
        // return ReviewModel.find({product:req.params.prodId}).exec();
    })
    .catch((err)=>{
        next(err);
    });
}); //Get Product Details


module.exports = router;
