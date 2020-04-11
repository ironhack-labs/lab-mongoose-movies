const express = require("express");
const router = express.Router();

const celebsRouter = require("./celebrities");
const moviesRouter = require("./movies");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.use("/celebrities", celebsRouter);
router.use("/movies", moviesRouter);

module.exports = router;
