const express = require('express');
const router = express.Router();

const {
    callCelebrities,
    celebritiesDetails,
    createCelebrity,
    updateCelebrity,
    deleteCelebrity,
    formCelebrity,
    formUpdateCeleb
} = require("../controllers/celebrities")


router.get("/celebrities", callCelebrities)

router.get("/celebrities/:celebrityID", celebritiesDetails)

router.get("/celebrities/new", formCelebrity)

router.post("/celebrities", createCelebrity)

router.get("/celebrities/edit/:celebrityID", formUpdateCeleb);

router.post("/celebrities/:celebrityID", updateCelebrity)

router.post("/celebrities/delete/:celebrityID", deleteCelebrity)


module.exports = router