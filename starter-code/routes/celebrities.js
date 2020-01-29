const express = require("express");
const router = express.Router();
const withDbConnection = require("./../withDbConnection");
const Celebrity = require("./../models/celebrity");

//list the celebrities
router.get("/", (req, res, next) => {
  withDbConnection(async () => {
    try {
      let celebrities = await Celebrity.find();
      res.render("celebrities/index", { celebrities, navCelebrities: true });
    } catch (error) {
      next();
      return error;
    }
  });
});

//celebrity details
router.get("/:id", (req, res, next) => {
  withDbConnection(async () => {
    try {
      let celebrity = await Celebrity.findById(req.params.id);
      res.render("celebrities/show", { celebrity, navCelebrities: true });
    } catch (error) {
      next();
      return error;
    }
  });
});

module.exports = router;
