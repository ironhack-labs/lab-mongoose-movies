const { route } = require(".");
const express = require("express");
const router = express.Router();

const NewCelebrity = require("./../models/Celebrity");

router.get("/celebrities", async (req, res, next) => {
  const findCeleb = await NewCelebrity.find();
  console.log("-----");
  console.log(findCeleb);
  res.render("celebrities/index", { findCeleb });
});

router.get("/celebrities/:id", async (req, res, next) => {
  const findOneCeleb = await NewCelebrity.findById(req.params.id);
  console.log(findOneCeleb);
  res.render("celebrities/show", { findOneCeleb });
});

module.exports = router;
