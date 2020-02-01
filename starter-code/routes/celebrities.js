/*jshint esversion: 6 */
const express = require("express");
const router = express.Router();
const withDbConnection = require("./../withDbConnection");
const Celebrity = require("./../models/Celebrity");

/* GET celebrities */
router.get("/", (req, res, next) => {
  withDbConnection(async () => {
    try {
      const celebrities = await Celebrity.find();
      res.render("celebrities/index", { celebrities });
    } catch (error) {
      next(error);
    }
  });
});

module.exports = router;
