
const express = require("express");
const router = new express.router();
const CelebrityModel = require("../model/celebrity");// const mongo = require ("./../")

router.get("/celebrities/new", (req, res, next) => {
  res.render("new-celebrities");
});

router.post("/celebrities/create", (req, res, next) => {
  CelebrityModel.create(req.body)
    .then(() => {
      res.redirect("celebrities");
    })
    .catch(() => {
      res.redirect("new-celebrities");
    });
});

router.get("/celebrities", (req, res, next) => {
  CelebrityModel.find()
    .then((celebrity) => res.render("celebrities/celebrities", { celebrity }))
    .catch((err) => console.log(err));
});

module.exports = router;
