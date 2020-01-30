const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity")

router.get("/", async (req, res) => {
  const celebrities = await Celebrity.find();
  res.render("celebrities/index", {
    celebrities
  })
})
