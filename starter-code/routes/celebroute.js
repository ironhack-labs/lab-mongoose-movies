const express = require("express");
const router = express.Router();

const {
  getCelebrities,
  getCelebrity,
  createCelebrity,
  deleteCelebrity,
  updateCelebrity
} = require("../controllers/celebrities.controller");

/* GET home page */
router
  .get("/", getCelebrities)
  .get("/new", (req, res, next) => {
    res.render("celebrities/new");
  })
  .get("/:CelebrityId", getCelebrity)

  .post("/", createCelebrity)
  .post("/:CelebrityId/delete", deleteCelebrity)
  .post("/:CelebrityId/update", updateCelebrity);

module.exports = router;