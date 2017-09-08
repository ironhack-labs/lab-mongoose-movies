var express = require('express');
var router = express.Router();
const Celebrities = require('../models/Celebrities');

// RETRIEVE: Celeb list

router.get("/celebrities", (req, res, next) => {
  Celebrities.find({},(err, products) =>{
    if (err) { return next(err)}

    res.render("celebrities/",{
      
    })
  })
})
