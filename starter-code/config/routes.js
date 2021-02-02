const express = require("express");
const Celebrity = require("../models/Celebrity.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
    Celebrity
        .find()
        .then((celebrities) => {
            console.log(celebrities)
            res.render("celebrities/index", {celebrities})} )
})

router.get("/celebrities/:id", (req, res, next) => {
  //TODO: next error
  const id = req.params.id
  Celebrity
    .findById(id)
    .then(celebrity => {
      res.render("celebrities/show",  celebrity );
    })
    .catch((e) => console.log(e));
});

module.exports = router;
