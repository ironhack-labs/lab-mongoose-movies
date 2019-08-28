const express = require("express");
const router = express.Router();

const {
  findCelebrities,
  newGetCelebrity,
  newPostCelebrity,
  findCelebrity,
  deleteCelebrity,
  editCelebrity,
  updateCelebrity
} = require("../controllers/celebrityController");

router.get("/celebrities", findCelebrities);

router.get("/celebrities/new", newGetCelebrity);

router.post("/celebrities", newPostCelebrity);

router.get("/celebrities/:id", findCelebrity);

router.post("/celebrities/:id/delete", deleteCelebrity);

router.get("/celebrities/:id/edit", editCelebrity);

router.post("/celebrities/:id", updateCelebrity);

module.exports = router;
