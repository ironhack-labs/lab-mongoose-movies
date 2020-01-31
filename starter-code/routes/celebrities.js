const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

// get  show all celebrites
router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("celebrities/index", { celebrities }); //esto es el que llama a la vista
    //capturas el error
  } catch (error) {
    console.log(`Celebrities.js - Error retrieving database ${error}`);
  }
  next();
});

module.exports = router;
