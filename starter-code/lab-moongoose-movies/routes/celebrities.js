const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities);
      res.render("celebrities/", { celebrities });
    })
    .catch(e => next(e));
});

router.get("/detail/:id", (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then(celebrity => {
      res.render("celebrities/show", celebrity);
    })
    .catch(e => next(e));
});

module.exports = router;
