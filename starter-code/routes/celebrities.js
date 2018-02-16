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
});

router.post("/new", (req, res, next) => {
  const celeb = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  });
  celeb.save((err)=>{
  if (err) {
    res.render("celebrities/new")    
  } else{
    res.redirect("/celebrities/new")
  }
  });
});

router.get("/:id", (req,res)=>{
  const id = req.params.id;
  Celebrity.findById(id, (err,doc) => {
    res.render("celebrities/show", {celeb:doc});
  });
});

router.post("/:id/delete", (req, res) => {
  var id = req.params.id;
  Celebrity.findByIdAndRemove(id,(err, docs) => {
    if (err) {
      next();
      return;
    } else {
        res.redirect("/celebrities")
    }
  });
});

router.get('/:id/edit', (req, res, next) => {  
  var id = req.params.id;
  console.log(id);
  Celebrity.findById(id,(err, doc) => {
    res.render("celebrities/edit", {celeb:doc});
  });
});

router.post('/:id', (req, res, next) => {  
  var id = req.params.id;
    Celebrity.findByIdAndUpdate(id, {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
      },(err)=>{
    if (err) {
      next();
      return;   
    } else{
      res.redirect("/celebrities")
    }
    });
});

module.exports = router;