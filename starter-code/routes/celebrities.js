const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity");
/* Get the Celebrities */
router.get("/", async (req, res, next) => {
  try {
    const celebrity = await Celebrity.find();
    res.render("celebrities/", { celebrity });
  } catch (e) {
    res.send(`error: ${e}`);
    next();
  }
});

module.exports = router;
