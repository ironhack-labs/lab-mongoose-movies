const express = require("express");
<<<<<<< HEAD
const Celebrity = require("../models/celebrity");
=======
>>>>>>> 07357bd033f2e9ac8a5bf410b73e99bfc5574598
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
