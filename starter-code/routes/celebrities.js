const express = require('express');
const router  = express.Router();

const{getCelebs, showCeleb}=require("../controllers/celebrities")

router
.get("/",getCelebs)
.get("/:id", showCeleb)

module.exports = router;
