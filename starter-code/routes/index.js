const express = require("express");
const router = express.Router();
const celebritiesRoutes = require("./celebrities");
const moviesRoutes = require("./movies");

router.use("/celebrities", celebritiesRoutes);
router.use("/movies", moviesRoutes);

router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
