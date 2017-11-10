const express = require("express");
const celebrities = require("../model/celebrities");
const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  // Iteration #2
  celebrities.find({}, (err, celebrities) => {
     console.log('celebrities');
     if(err){
         return next(err);
     }
    res.render("celebrities/index", {celebrities: celebrities});
  });
});

router.get("/celebrities/:id", (req, res, next) => {
  let celebritiesId = req.params.id;

  celebrities.findById(celebritiesId, (err, celebrities) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/show", { celebrities: celebrities });
  });
});

module.exports = router;