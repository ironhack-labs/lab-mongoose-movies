const express = require('express')
const celebsRouter = express.Router()

const Celebrity = require("./../models/celebrity")

celebsRouter.get("/", (req, res) => {
    Celebrity.find({})
    .then((celebrities) => {
      res.render("celebrities/index", { celebrities });
    })
    .catch((error) => {
      console.log(error);
    });
})

module.exports = celebsRouter