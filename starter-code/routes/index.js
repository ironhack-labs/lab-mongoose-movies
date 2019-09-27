const express = require('express');
const router  = express.Router();
const model = require("../models/celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get("/celebrities",(req,res,next) => {
  model.find().then((e)=>
  {
    console.log(e)
    res.render("./celebrities/index",{e})
  }
    ).catch()
});

module.exports = router;