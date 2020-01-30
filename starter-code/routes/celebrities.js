const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

// CRUD -> (R) Retrieve
router.get("/", async (req, res, next) => {
  try {
    const celebrity = await Celebrity.find();
    res.render("celebrities/index", { celebrity });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

module.exports = router;
