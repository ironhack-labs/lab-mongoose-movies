 
const { Router } = require("express");
const {
  getAllCelebs,
  createCeleb,
  createCelebView,
  updateCeleb,
  updateCelebView,
  deleteCeleb
} = require("../controllers/celebrity");
const router = Router();

router
  .get('/', getAllCelebs)
  .get("/createCeleb", createCelebView)
  .post("/createCeleb", createCeleb)
  .get("/:celebId/updateCeleb", updateCelebView)
  .post("/:celebId/updateCeleb", updateCeleb)
  .get("/:celebId/deleteCeleb", deleteCeleb);
module.exports = router;