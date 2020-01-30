const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", async (req, res) => {
  const celebrities = await Celebrity.find();
  console.log(celebrities, "hola");
  res.render("celebrities/index", { celebrities });
});

module.exports = router;
