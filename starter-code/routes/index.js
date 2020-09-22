const express = require("express");
const Celebrity = require("../models/celebrity");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", async (req, res, next) => {
  try {
    const celebrity = await Celebrity.find();
    res.render("celebrities", { celebrity });
  } catch (error) {
    next(error);
    return error;
  }
});

module.exports = router;
