const express = require("express");
const Router = express.Router();

const Celebrity = require('../models/Celebrity')

Router.get("/", (req, res, next) => {
    Celebrity.find()
    .then(celebrities => {
        res.render("celebrities/index", {celebrities});
    })  
    .catch(err => {
        console.log('Error while finding celebrities list', err)
        next()
    })
})


module.exports = Router;
