const express = require("express");
const router = express.Router();
const Celeberty = require("../models/Celeberty");

router.get("/", (req, res, next) => {
  Celeberty.find({})
    .then(document => {
      //res.send(document);
      res.render("../views/celeberties/index", { celeberties: document });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/:id", (req, res, next) => {
  Celeberty.findById(req.params.id)
    .then(document => {
      // res.send(document);
      res.render("../views/celeberties/show.hbs", { celeb: document });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/new", (req, res, next) => {
  res.render("../views/celeberties/new.hbs");
});

router.post("/new", (req, res, next) => {
  Celeberty.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(document => {
      console.log(document);
      res.redirect("/celeberties");
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/:id/delete", (req, res, next) => {
  Celeberty.findByIdAndDelete(req.params.id)
    .then(document => {
      res.redirect("/celeberties");
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/:id/update", (req,res,next) =>{
  Celeberty.findById(req.params.id).then(document =>{
    res.render("../views/celeberties/edit.hbs",{celeb: document})
  }).catch(err=>{
    console.log(err)
    next()
  })
})

module.exports = router;
