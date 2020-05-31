const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET home page */
router.get("/", async (req, res, next) => {
  Celebrity.find()
    .then((celeb) => {
      res.render("celebrities/index", { list: celeb });
    })
    .catch((err) => {
      console.log("Error when get Celebrities list", err);
      next();
    });
});

module.exports = router;
