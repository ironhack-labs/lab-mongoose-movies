const { Router } = require("express");
const app = require("../app");
const router = Router();
const { getCelebs, getCeleb, newCeleb, addCeleb, deleteCeleb } = require("../controllers/celebrities")

router.get("/", getCelebs).get("/new", newCeleb).post("/", addCeleb).post("/:id/delete", deleteCeleb).get("/:id", getCeleb);

module.exports = router;