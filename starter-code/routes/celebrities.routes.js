const express = require('express');
const router  = express.Router();

const { callCelebrities, 
        celebritesDetails, 
        createCelebrity, 
        updateCelebrity,    
        deleteCelebrity,
        formCelebrity,
        formUpdateCeleb} = require("../controllers/celebrities")


// C

router.get("/new", formCelebrity)
router.post("/new", createCelebrity)

//R
router.get("/", callCelebrities)
router.get("/:celebrityID", celebritesDetails)

//U

router.get("/update/:celebrityID", formUpdateCeleb)
router.post("/update/:celebrityID", updateCelebrity)

//D

router.get("/delete/:celebrityID", deleteCelebrity)

module.exports = router