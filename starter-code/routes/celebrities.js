const express = require("express")
const router = express.Router()
const Celebrity = require("../models/celebrity-model")

router.get('/celebrities/index', (req, res, next) => {
    Celebrity.find()
        .then(allCelebrities => res.render('celebrities/index', {
            allCelebrities
        }))
        .catch(err => console.log("An error ocurred", err))
})