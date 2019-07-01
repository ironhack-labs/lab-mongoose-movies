const express = require("express");
const router = express.Router();

const {
  findCelebrities,
  findOneCelebrity,
  viewCreateCelebrity,
  create,
  deleteCelebrity
} = require("../controllers/celebrities.controllers");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", findCelebrities);
router.get("/celebrities/new", viewCreateCelebrity);
router.post("/celebrities/new", create);

router.get("/celebrities/:id", findOneCelebrity);
router.get("/celebrities/:id/delete", deleteCelebrity);

module.exports = router;
