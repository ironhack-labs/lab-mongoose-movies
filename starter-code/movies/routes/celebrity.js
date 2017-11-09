const express = require("express");
const Celebrities = require("../model/celebrities");
const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  // Iteration #2
  Celebrities.find({}, (err, celebrities) => {
     console.log('celebrities');
     if(err){
         return next(err);
     }
    res.render("celebrities/index", {celebrities: celebrities});
  });
});


module.exports = router;