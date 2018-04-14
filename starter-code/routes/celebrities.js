require("dotenv").config();

const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/Celebrity")

router.get("/index",(req, res, next) => {
  Celebrity.find().then(celebrities => {
    
    res.render("celebrities/index",{celebrities});
  })
  .catch(err => {
    console.log(err);
  });
});

module.exports = router;