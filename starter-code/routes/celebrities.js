const express = require("express");
const router = express.Router();
const Celebrities = require("../models/celebrity");

/* GET show all celebrities */
router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrities.find();
    res.render("celebrities/index", { celebrities });
  } catch (error) {
    console.log(`Celebrities.js - Error retrieving all celebrities ${error}`);
  }
});

/* GET a celebritie according to its id */
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const celebrity = await Celebrities.findById(id);
    res.render("celebrities/show", { celebrity });
  } catch (error) {
    console.log(`Celebrities.js - Error finding celebrity by id ${error}`);
  }
});

module.exports = router;
