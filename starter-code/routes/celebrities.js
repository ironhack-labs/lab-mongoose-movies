const express = require("express");
const router = express.Router();
const celebritiesModel = require("../models/celebrities.model");

/* GET home page */
router.get("/celebrities", async (req, res) => {
  try {
    const dbResult = await celebritiesModel.find();
    res.render("/celebrities/index", { celebrities: dbResult });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
