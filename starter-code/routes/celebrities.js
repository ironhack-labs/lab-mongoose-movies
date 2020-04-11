const express = require("express");
const router = express.Router();

const Celeb = require("../models/celebrity");

// show all celebrities

router.get("/index", (res, req, next) => {

  Celeb.find().then((celebs) => {

    console.log("All celebs: " + celebs);

    let obj = { allCelebs: celebs };

    res.render("celebrities/index", obj)
      .catch((error) => console.log("Error while doing something", error));
  });
});

module.exports = router;
