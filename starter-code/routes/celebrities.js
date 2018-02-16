const express = require('express');

const Celebrity = require("../models/Celebrity.js");

const router = express.Router();

router.get("/", (req, res, next) => {
  Celebrity.find({},(err,result)=>{
    if(err) return next;
    res.render("celebrities/index", {celebArray:result});
  });
});

router.get("/new", (req, res, next) => {
    res.render("celebrities/new");
})
.post("/", (req, res, next) => {
    const celeb = new Celebrity({
          name:req.body.name,
          occupation: req.body.occupation,
          catchPhrase: req.body.catchPhrase,
      });
      celeb.save((err)=>{
        if (err) {
          res.render("celebrities/new")    
        } else{
          res.redirect("/celebrities")
        }
        });
  });

router.get("/:id", (req,res)=>{
  const id = req.params.id;
  Celebrity.findById(id, (err,doc) => {
    res.render("celebrities/show", {celeb:doc});
  });
});

module.exports = router;