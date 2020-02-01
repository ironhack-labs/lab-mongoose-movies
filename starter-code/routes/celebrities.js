const express = require("express");
const router = express.Router();
const Celebrities = require("../models/celebrity");


// CRUD -> (R) Retrieve . Iteration 2: Show Our Celebrities
router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrities.find();
    res.render("celebrities/index", { celebrities });
  } catch (error) {
    console.log(`Error retrieving celebrities ${error}`);
  }
});

// CRUD -> (R) Retrieve . Iteration 3: The Celebrity Details Page

module.exports = router;
