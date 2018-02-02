var express = require("express");
var router = express.Router();

const Celebrity = require("../models/celebrity");

/* GET users listing. */
router.get("/", function(req, res, next) {
  Celebrity.find({}, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/index", {
      celebrities: Celebrity
    });
  });
});

module.exports = router;
