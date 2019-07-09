const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  if (req.session.errorCount <= 0) {
    req.session.loggedout_msg = null;
  }
  req.session.errorCount -= 1;
  res.render("index", { msg: req.session.loggedout_msg });
});

module.exports = router;
