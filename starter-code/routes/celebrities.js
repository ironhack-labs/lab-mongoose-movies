const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities/index", (req, res, next) => {
  Celebrity.find({}) 
    .then((dbResult) => {
      res.render("celebrities/index", { celebrities: dbResult });
    })
    .catch((error) => {
      next(error); // Sends us to the error handler middleware in app.js if an error occurs
    });
});




module.exports = router;
