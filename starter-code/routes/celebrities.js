const Celebrity = require('../models/Celebrity')
const express = require('express');
const router = express.Router();

const {
    callCelebrities,
    celebritesDetails,
    formCelebrity,
    createCelebrity,
    formUpdateCeleb,
    updateCelebrity,
    deleteCelebrity
} = require("../controllers/celebrities")

//List
router.get("/celebrities", callCelebrities)

//Create
router.get("/celebrities/new", formCelebrity)

router.post("/celebrities/new", createCelebrity)

//Update
router.get("/celebrities/update/:celebrityID", formUpdateCeleb);

router.post("/celebrities/update/:celebrityID", updateCelebrity)

//Delete
router.get("/celebrities/delete/:celebrityID", deleteCelebrity)

router.get("/celebrities/:celebrityID", celebritesDetails)

module.exports = router