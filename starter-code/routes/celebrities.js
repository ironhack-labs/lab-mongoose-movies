const express = require('express');
const router  = express.Router();

const{getCelebs, showCeleb, newCeleb, addCeleb, deleteCeleb}=require("../controllers/celebrities")

router
.get("/",getCelebs)
.get("/show/:id", showCeleb)
.get("/celebrities/new", newCeleb)
.post("/", addCeleb)
.post("/:id/delete", deleteCeleb)



module.exports = router;
