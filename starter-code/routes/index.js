const express = require("express");
const router = express.Router();

const {
  getCelebrities,
  getCelebrity,
  createCelebrity,
  deleteCelebrity,
} = require("../controllers/celebrities.controller");

/* GET home page */
router
  .get("/", (req, res, next) => {
    res.render("index");
  })
  .get("/celebrities", getCelebrities)
  .get("/celebrities/new", (req, res, next) => {
    res.render("celebrities/new");
  })
  .get("/celebrities/:CelebrityId", getCelebrity)

  .post("/celebrities", createCelebrity)
  .post("/celebrities/:CelebrityId/delete", deleteCelebrity);

module.exports = router;
