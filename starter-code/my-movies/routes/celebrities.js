"use strict";

const express = require('express');
const router  = express.Router();

// import the celebs model to do product queries
const CelebrityModel = require("../models/celebrity-model");


router.get("/celebrities", (req, res, next) => {
    CelebrityModel
      .find()
      .exec()
      .then((celebResults) => {
          // create a local variable for the view to access the DB results
          res.locals.listOfCelebs = celebResults;

          // render only after the results have been retrieved
          // (the "then()" callback)
          res.render("celebrities/index");
      })
      
      .catch((err) => {
          // render the error page with our error
          next(err);
      });
}); // GET /products





router.get("/celebrities/:id", (req, res, next) => {
    CelebrityModel
      .findOne()
      .exec()
      .then((celebResults) => {
          // create a local variable for the view to access the DB results
          res.locals.listOfCelebs = celebResults;

          // render only after the results have been retrieved
          // (the "then()" callback)
          res.render("celebrities/index");
      })
      
      .catch((err) => {
          // render the error page with our error
          next(err);
      });
}); // GET /products

module.exports = router;