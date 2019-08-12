const Celebrity = require('../models/celebrity');
const express = require("express");
const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  Celebrity
    .find()
    .then(celebrities => {
      res.render('celebrities/index', celebrities)
    })
    .catch(err => console.log("There was an error returning the celebrities", err))
})

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity
    .findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/show', {celebrity})
    })
    .catch(err => console.log("There's was an error finding the celebrity", err))
})

module.exports = router;