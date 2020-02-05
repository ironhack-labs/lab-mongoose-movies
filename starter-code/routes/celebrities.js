const express = require("express");
const Router = express.Router();
const Celebrity = require("../models/Celebrity");

Router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebritiesList => {
      //   res.send(celebritiesList);
      res.render("celebrities/index", { celebritiesList });
    })
    .catch(err => {
      next(err);
    });
});

Router.get("/celebrityId", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.send(celebrity);
      res.render("celebrities/show", celebrity);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = Router;
