const express = require("express");
const router = new express.Router();
const celebrityModel = require("../models/Celebrity");

router.get("/all", (req, res) => {
  celebrityModel
    .find()
    .then(celebrities => {
      res.render("celebrities", {
        celebrities
      });
    })
    .catch(dbErr => {
      console.log("OH NO ! Database error", dbErr);
    });
});

router.get("/new", (req, res) => {
    res.render("celebrities/new");
  });
  
  router.post("/new", (req, res) => {
          const { name, occupation, catchPhrase } = req.body;
          // if some tests must be performed, do so before database query
          celebrityModel
      .create({
            name,
        occupation,
        catchPhrase,
      })
      .then(dbRes => res.redirect("/celebrities/all"))
      .catch(dbErr => {
            console.log(dbErr);
            res.render("celebrities/new");
          });
      });
  
    router.get("/:id", (req, res) => {
      celebrityModel
        .findById(req.params.id)
        .then(celebrity => {
          res.render("celebrities/show", {celebrity});
        })
        .catch(dbErr => console.error("OH no, db err :", dbErr));
    });
    
    
    module.exports = router;
