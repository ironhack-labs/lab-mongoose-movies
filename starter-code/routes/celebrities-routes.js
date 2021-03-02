const express = require("express");
const router = express.Router();
const celebrityModel = require("./../models/celebrity");


router.get("/celebrities/new",function(req,res,next){
  
        res.render("celebrities/new-celebrity");
});



router.post("/celebrities/create", async (req, res, next) => {
    // this is the request body > an object containing the posted informations"
    console.log(req.body);
    // remember : keys are set on the HTML form with the name attributes !!!
    const { name, occupation,catchPhrase } = req.body; // destructuring syntax here !!!!
    console.log(name, occupation,catchPhrase);
   
    try {
      await celebrityModel.create({
        name,
        occupation,
        catchPhrase,
      });
      res.redirect("celebrities/new-celebrities");
    } catch (err) {
      next(err);
    }
    // res.send("work in progress...");
  });
   
  // Iteration  3 Listing Our celebrities
  router.get("/celebrities", (req, res, next) => {
    
    celebrityModel.find()
      .then((dbRes) => {
        res.render("celebrities/celebrities.hbs", {
          celebrities: dbRes,
        });
      })
      .catch((dbError) => {
        next(dbError);
      });
  });


  module.exports = router;