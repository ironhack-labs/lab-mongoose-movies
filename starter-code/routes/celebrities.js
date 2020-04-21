// unused, confusing instructions on Iteration 2
// added same snippet to index.js for less complexity

const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity-model"); // celebrity.js

router.get("/celebrities", (request, response, next) => {
  Celebrity.find()
    .then((celebrityArray) => {
      console.log(celebrityArray);
      response.render("celebrities/index", { celebrityArray });
    })
    .catch((error) => {
      console.log(error);
      next();
    });
});
