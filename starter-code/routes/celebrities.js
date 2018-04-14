require("dotenv").config();

const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/Celebrity")


//----------GET CELEBRITY INDEX------------

router.get("/index",(req, res, next) => {
  Celebrity.find().then(celebrities => {
    
    res.render("celebrities/index",{celebrities});
  })
  .catch(err => {
    console.log(err);
  });
});


//-----------CELEBRITIES DETAILS---------

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("celebrities/show", {celebrity});
  })
  .catch(err => {
    console.log(err);
  });
});

module.exports = router;