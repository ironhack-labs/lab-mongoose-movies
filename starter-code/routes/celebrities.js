const express = require('express');
const router  = express.Router();
const {showCelebrities, getCelebrity, addCelebrity, newCelebrity, deleteCelebrity} = require("../controllers/controllers")

router.get("/", showCelebrities)

router.get("/new", addCelebrity)
router.post("/new", newCelebrity)


router.post("/:id/delete", deleteCelebrity)
router.get("/:id", getCelebrity)



module.exports = router