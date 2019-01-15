const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity");



//Iteration #2 listing our celebrities
router.get("celebrity/celebrities", (req, res) => {
    Celebrity.find()
        .then(celebrity => {
            res.render("celebrities/index", {
                celebrity
            });
        })
        .catch(err => {
            console.log(err);
        })
})


//Iteration #3 celebrities details
router.get("/celebrities/:id", (req, res) => {


})


module.exports = router;