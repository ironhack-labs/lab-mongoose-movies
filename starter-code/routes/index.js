const express = require("express");
const router = express.Router();

const ensureLogin = require("connect-ensure-login");

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("=-=--=-=--=", req.session);
  console.log("=-=--=-=--=", req.user);

  res.render("index");
});



module.exports = router;
