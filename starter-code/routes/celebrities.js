const express = require("express");
const router = new express.Router();
const CelebrityModel = require("./../models/celebrity");


// GET - /views/celebrities/index
router.get("/celebrities", async (req, res, next) => {
  try {
    // Call the Celebrity model's find method to retrieve all the celebrities.
    const celebs = await CelebrityModel.find();
    // If there isn't an error, render the celebrities/index view.
    res.render("celebrities/index", { celebs }); 
  } catch (err) {
    next(err);
  }
});