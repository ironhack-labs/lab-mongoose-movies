const express = require('express');
const router  = express.Router();
const Celeb         = require("../models/celebrity")

router.get("/", (req, res, next) => {
  Celeb.find({}).then(celebrities => {
    res.render("celebrities/index", {celebrities})
  })
})

router.post("/", (req, res, next) => {
 const {
   name,
   catchphrase,
   occupation
 } = req.body;

  Celeb.create({name,catchphrase,occupation}).then(result => {
    console.log(result);
  res.redirect("/celebrities")}).catch(() =>
  res.render("celebrities/new"))
})

router.get("/new", (req, res, next) => {
  res.render("celebrities/new")
})

router.get("/:id", (req, res, next) => {
  const query = req.params.id;
  Celeb.findById(query).then(star => {
    console.log("Hello")
    res.render("celebrities/show", {star})
  })
})




module.exports = router;