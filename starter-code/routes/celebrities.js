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

router.get("/:id", async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const obj = await Celebrity.findById(id);
    console.log(obj)
    res.render("celebrities/show", {
      obj
    })
  } catch (err) {
    console.log(`celebrities.js - error finding new celebrity by id ${err}`)
  }
})

module.exports = router;
