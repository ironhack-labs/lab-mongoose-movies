var express = require('express');
var router = express.Router();

const Celebrity = require("../models/Celebrity.js")

/* GET Celebrities. */
router.get("/", (req, res) => {
    Celebrity.find({}, (err, result) => {
      console.log(result);
      if (err) res.status(507).send(err);
      res.render("celebrities", {celebrities:result});
    });
  });


  router.get("/:id", (req, res)=>{
      const id = req.params.id;
    Celebrity.findById(id, (err, result)=>{
        res.render("show", {celebrities:result})
        console.log(result);
    });
  });

module.exports = router;