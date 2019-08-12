const Celebrity = require('../models/celebrity');
const express = require("express");
const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  Celebrity
    .find()
    .then(celebrities => {
      console.log(celebrities)
      res.render('celebrities/index', celebrities)
    })
    .catch(err => console.log("There was an error returning the celebrities", err))
})

module.exports = router;