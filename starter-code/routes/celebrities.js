const express = require("express");
const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  res.render("celebrities", { celebritiesArray: });
});

module.exports = router;
