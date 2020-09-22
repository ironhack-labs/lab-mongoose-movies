const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res, next) => {
  Label.find({}) 
    .then((dbResult) => {
      res.render("labels.hbs", { labels: dbResult });
    })
    .catch((error) => {
      next(error); // Sends us to the error handler middleware in app.js if an error occurs
    });
});




module.exports = router;
