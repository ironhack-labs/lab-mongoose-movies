const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity").Celebrity;

/* GET celebrities listing. */
router.get("/", function(req, res, next) {
  Celebrity.find({}, (err, result) => {
    if (err) {
      console.log("ERRRRROORR", err);
      next(err);
    } else {
      const data = {
        celebrities: result
      };
      res.render("celebrity/index", data);
    }
  });
});

router.get("/:id", function(req, res, next) {
  const id = req.query.id;
  Celebrity.findById(id, function(err, result) {
    if (err) {
      console.log("ERRRRROORR", err);
      next(err);
    } else {
      const data = {
        celebrities: result
      };
      res.render("celebrity/show", data);
    }
  });
});

module.exports = router;
