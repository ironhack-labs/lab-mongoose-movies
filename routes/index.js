const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  console.log(req.session);
  res.render("index", { user: req.session && req.session.user });
});

router.get("/profile", (req, res, next) => {
  console.log(req.query);
  res.render("profile", { user: req.session && req.session.user });
});

module.exports = router;
