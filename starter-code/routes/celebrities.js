const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

const {
    callCelebrities,
    celebritesDetails,
    createCelebrity,
    updateCelebrity,
    deleteCelebrity,
    formCelebrity,
    formUpdateCeleb
} = require("../controllers/celebrities")


router.get("/celebrities", callCelebrities)

router.get("celebrities/:celebrityID", celebritesDetails)

//ITERACION 4
router.get("/celebrities/new", formCelebrity)

router.post("/celebrities/new", createCelebrity)

//update
router.get("/celebrities/update/:celebrityID", formUpdateCeleb);

router.post("/celebrities/update/:celebrityID", updateCelebrity)

//Delete
router.post("/celebrities/delete/:celebrityID", deleteCelebrity)


module.exports = router