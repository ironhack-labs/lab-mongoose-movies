const express = require("express");
const router = express.Router();

/* GET celebrities page */
router.get("/celebrities", (req, res, next) => {
  res.render("celebrities/index");
});

module.exports = router;
