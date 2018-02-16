var express = require('express');
var router = express.Router();
var Celebrity = require("../models/Celebrity.js");


/* GET users listing. */
router.get("/", (req,res)=>{
  Celebrity.find({}, (err, docs)=>{
    console.log(docs);
    //if(err) res.status(500).send(err);
    res.render("celebrities/index", {celebArray:docs});
  });
});

module.exports = router;