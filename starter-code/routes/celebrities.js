const express = require('express');
const Router  = express.Router();

const Celebrity = require("../models/Celebrity")

Router.get("/", (req, res, next) => {
  Celebrity.find()
  .then (celebrities => res.render("celebrities/index", {celebrities}))
  .catch (err        => next(err))
})

Router.get("/new", (req,res,next) => res.render("celebrities/new"))

Router.post("/new", (req, res) => {
  const {name, occupation, catchPhrase } = req.body
  const newCeleb = new Celebrity ({ name, occupation, catchPhrase})
  newCeleb.save()
    .then(celebrity => res.redirect('/celebrities'))
    .catch(err => console.log(`The celebrity wasn't created ${err}`))
})

Router.post("/:id/delete", (req, res, next) => {
  console.log(req.params.id)
  Celebrity.findByIdAndDelete(req.params.id)
  .then(celebrity => res.redirect("/celebrities"))
  .catch(err => next(err))
})

Router.get("/:celebId", (req,res,next) => {
  Celebrity.findById(req.params.celebId)
  .then (celebrity => {
      console.log(celebrity)
      res.render("celebrities/show", {celebrity})})
      .catch(err => next(err))
})


module.exports = Router