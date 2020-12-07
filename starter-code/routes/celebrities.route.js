const { Router } = require("express");
const router = Router();

const {
  getCelebrities, 
  getCelebrity,
  createCelebrity, 
  deleteCelebrity, 
  updateCelebrity
} = require("../controllers/celebrity.controllers");


router
  .get("/", getCelebrities)
  .get("/:celebrityId", getCelebrity)
  .post("/", createCelebrity)
  .post("/:celebrityId/delete", deleteCelebrity)
  .post("/:celebrityId/update", updateCelebrity)

module.exports = router;
