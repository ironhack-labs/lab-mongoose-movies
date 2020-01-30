const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity")

router.get("/", async (req, res) => {
  const celebrities = await Celebrity.find();
  console.log(celebrities)
  res.render("celebrities/index", {
    celebrities
  })
})

module.exports = router;
