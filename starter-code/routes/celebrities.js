const { Router } = require("express");
const router = Router();
const { getCelebs, getCeleb, newCeleb, addCeleb, deleteCeleb, editCeleb, saveCeleb } = require("../controllers/celebrities")

router.get("/", getCelebs).get("/new", newCeleb).post("/", addCeleb).post("/:id/delete", deleteCeleb).get("/:id/edit", editCeleb).get("/:id", getCeleb).post("/:id", saveCeleb);

module.exports = router;