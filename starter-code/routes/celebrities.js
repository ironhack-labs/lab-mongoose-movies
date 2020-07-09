const express = require("express");
const router = new express.Router();
const celebrityModel = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
    celebrityModel
      .find() 
      .then(celebrities => {
        res.render("celebrities/index", {celebrities});
      })
      .catch(next);
  });

  router.get("/celebrities/new", (req, res) => {
    res.render("celebrities/new");
});

router.post("/celebrities", (req,res) => {
    const {name, occupation, catchPhrase} = req.body;
    celebrityModel
    .create({name, occupation, catchPhrase})
    .then(() => {
    //   req.flash("success", "celebrity successfully created");
      res.redirect("/celebrities");
    })
    .catch(res.redirect("celebrities/new"));
  })

  router.post("/celebrities/:id/delete", (req, res, next) => {
    celebrityModel
      .findByIdAndDelete(req.params.id)
      .then(dbRes => {
        res.redirect("/celebrities");
    })
      .catch(next);
  });

  module.exports = router;

  router.get("/celebrities/:id", (req, res, next) => {
    celebrityModel
      .findById(req.params.id) 
      .then(celebrities => {
        res.render("celebrities/show", {celebrities});
      })
      .catch(next);
  });

  router.post("/celebrities/:id", (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    celebrityModel
      .findByIdAndUpdate(req.params.id)
      .then(dbRes => {
        res.redirect("/celebrities");
    })
      .catch(next);
  });

  router.get("/celebrities/:id/edit", (req, res, next) => {
    celebrityModel
      .findById(req.params.id) 
      .then(celebrities => {
        res.render("celebrities/edit", {celebrities});
      })
      .catch(next);
  });



