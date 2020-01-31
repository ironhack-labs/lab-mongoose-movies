const express = require('express');
const router  = express.Router();
const celebrity = require("../models/celebrity");



/* GET home page */
router.get("/celebrities", async (req, res) => {
  const celeb = await celebrity.find();
  res.render("../views/test.hbs");
});

module.exports = router;
