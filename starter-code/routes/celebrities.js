const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity")


router.get("/update/:id", (req, res) => {
  Celebrity.findById(req.params.id).then(celebrity => res.render("editfile", {celebrity})).catch(() => {console.log("error")})
})

router.post("/update/:id", (req, res) => {
  Celebrity.updateOne({_id: req.params.id}, { $set: {name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase}}, {new: true})
  .then(() => {res.redirect("/celebrities")})
})

router.get("/delete/:id", (req, res) => {
  Celebrity.findByIdAndDelete(req.params.id).then(() => {res.redirect("/celebrities")}).catch(() => {console.log("error")})
})


router.get("/new", (req, res) => {
  res.render("addceleb")
})


router.post("/new", (req,res) => {
  Celebrity.create(req.body).then(() => {res.redirect("/celebrities"); console.log(req.body)})
})

router.get("/", (req, res) => {
  Celebrity.find().then(celebrities => {res.render("celebrities", {celebrities})}).catch(error => {next(); console.log(error)})
})

router.get("/:id", (req, res) => {
  Celebrity.findById(req.params.id).then(celebrity => {res.render("detailpage", celebrity)}).catch(error => {console.log(error)})
})






module.exports = router;
