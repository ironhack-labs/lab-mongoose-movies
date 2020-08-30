const express = require("express");
const router = express.Router();
const {
  getAllCelebs,
  getSingleCeleb,
  showCreatePage,
  createCeleb,
  deteteCeleb,
  showUpdateCeleb,
  updateCeleb,
} = require("../controllers/celebrities");

router.get("/edit/:thisId", showUpdateCeleb);

router.post("/edit/:thisId", updateCeleb);

router.get("/new", showCreatePage);

router.post("/new", createCeleb);

router.get("/", getAllCelebs);

router.get("/single/:celebId", getSingleCeleb);

router.post("/delete/:id", deteteCeleb);

module.exports = router;
