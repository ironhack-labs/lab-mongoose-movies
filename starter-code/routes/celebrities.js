const express = require('express');
const router = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/celebrities", (res, req, next) => {
  Celebrity.find()
    .then(celebData => {
      res.render("celebrities/index", { celebrities: celebData })
    })
    .catch(error => {
      console.log('Error', error)
    })
})