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
      next(error);
    }
  });
});

module.exports = router;
