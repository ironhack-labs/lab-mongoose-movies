const express = require("express");
const router = express.Router();
require("dotenv").config();
const CelebrityModel = require("../models/celebrity.model");

router.get("/", (req, res) => {
  CelebrityModel.find().then((celeb) => {
    res.render("celebrity.hbs", { celeb });
  });
});

// celebrity/:id
router.get("/showdetails/:id", (req, res) => {
  let id = req.params.id;
  CelebrityModel.findById(id)
  .then((celeb) => {
    res.render("show.hbs", { celeb });
  });
});

// celebrities/new
router.get('/new', (req, res, next) => {
      res.render('new.hbs');
    });

  router.post("/new", (req, res) => {
        CelebrityModel.create(req.body)
          .then((celeb) => {
          res.redirect("/celebrity");
        });
      })
      
router.get("/remove/:id/delete",(req,res)=>{
      let id = req.params.id;

      CelebrityModel.findByIdAndDelete(id)
      .then((celeb) => {
            res.redirect("/celebrity");
          });
        })
module.exports = router;
