var express = require('express');
var router = express.Router();

const Celebrity = require("../models/Celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find({}, (err, docs) => {
    if(err){
      next();
      console.log(err)
    } else {res.render("celebrities/index", {celebrities:docs})}
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id, (err, doc) => {
    if(err){
      next();
      console.log(err)
    } else {res.render("celebrities/show", {celebrity:doc})}
  });
});
module.exports = router;