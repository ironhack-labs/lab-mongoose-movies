const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("");
});

router.get("/celebrity", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("./celebrities/index", { celebrities });
      console.log(celebrities);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/show/:id", (req, res) => {
  Celebrity.findById(req.params.id)
    .then(celebrities => {
      res.render("./celebrities/show", { celebrities });
      console.log(celebrities)
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
