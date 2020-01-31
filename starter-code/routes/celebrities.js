const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity");
/* Get the Celebrities */ 
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