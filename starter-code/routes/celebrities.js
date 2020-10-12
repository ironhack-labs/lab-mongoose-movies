const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const CelebrityModel = require("../models/celebrity.model");

router.get('/celebrities', (req, res, next) => {
  CelebrityModel.find()
    .then((data) => {
      console.log("data retrieved");
      res.render("celebrities/index.hbs", { data });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.post("/celebrities", (req, res) => {
  CelebrityModel.create(req.body)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(() => {
      res.render("celebrities/new");
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  CelebrityModel.findById(req.params.id)
    .then((data) => {
      res.render("celebrities/show", { data });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  CelebrityModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  CelebrityModel.findById(req.params.id)
    .then((data) => {
      res.render("celebrities/edit.hbs", { data });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  CelebrityModel.findByIdAndUpdate(req.params.id, {$set: req.body})
  .then(() => {
    res.redirect("/celebrities");
  })
  .catch((err) => {
    console.log(err);
    next();
  });
});
 
module.exports = router;