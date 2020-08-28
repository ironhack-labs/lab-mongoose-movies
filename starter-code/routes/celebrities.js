const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

const { callCelebrities, celebritesDetails, createCelebrity, updateCelebrity, deleteCelebrity } = require("../controllers")


router.get("/celebrities", callCelebrities)

router.get("celebrities/:celebrityID", celebritesDetails)

//ITERACION 4
router.get("/celebrities/new", formCelebrity)

router.post("/celebrities", createCelebrity)

router.post("/celebrities/update/:celebrityID", updateCelebrity)
    //ITERACION 5
router.post("/celebrities/delete/:celebrityID", deleteCelebrity)


module.exports = router