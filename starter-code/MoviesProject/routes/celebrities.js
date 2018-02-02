var express = require("express");
var router = express.Router();
var Celebrity = require("../models/celebrity");

router.get("/celebrities", function(req, res, next) {
  res.render(Celebrity);
});

module.exports = router;
