const express = require("express");
const router = express.Router();
const celebrity = require("../models/celebrity");

router.get("/", async (req, res, next) => {
  try {
    const celebrities = await celebrity.find();
    res.render("celebrities/index", { celebrities });
  } catch (error) {
    console.log("There is an error");
  }
});
