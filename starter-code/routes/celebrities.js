const express = require("express");
const router = new express.Router();
const celebrityModel = require('./../models/celebrity');



router.get("/", async (req, res, next) => {
    try {
        const celebrities = await celebrityModel.find({});
        console.log(celebrities);
      res.render("celebrities/index", { celebrities: celebrities});
    } catch (err) {
      next(err);
    }
  });




  router.get("/new", async (req, res, next) => {
      console.log("toto");
    res.render("celebrities/new");
  });

  //infos
  router.get("/:id", async (req, res, next) => {
    try {
      const celebritiesinfo = await celebrityModel.findById(req.params.id);
      res.render("celebrities/show", celebritiesinfo);
    } catch (err) {
      next(err);
    }
  });

  
  router.post("/", (req, res, next) => {
      console.log(req.body);
    celebrityModel.create(req.body)
      .then((celebritie) => {
        res.redirect("/celebrities");
      })
      .catch((err) => {
        console.log(err);
        res.redirect("/celebrities/new");
      });
  });

  router.post("/:id/delete", async (req, res, next) => {
    try {
      await celebrityModel.findByIdAndRemove(req.params.id);
      res.redirect("/");
    } catch (err) {
      next(err);
    }
  });


  module.exports = router;