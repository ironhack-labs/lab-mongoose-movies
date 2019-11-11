const express = require("express");
const router = new express.Router();

const Celeb = require("./../models/celeb");

  
  router.get("/celebrities", (req, res, next) => {
    Celeb.find().then(dbRes => {
      console.log(dbRes);
      res.render("celebrities/index", { celeb: dbRes})
      
    });
  });

  router.get("/celebrities/new", (req, res) => {
    // const data = {
    //   js: ["form"]
    // };
    res.render("celebrities/new")
    // , data
  });

  router.post("/celebrities/new", (req, res) => {
    Celeb
      .create(req.body)
      .then(dbResult => {
        res.redirect("/celebrities");
      })
      .catch(dbError => {
        console.log(dbError);
        res.redirect("/celebrities/new");
      });
  }); 

  router.get("/celebrities/:id", (req, res) => {
    Celeb.findOne({_id: req.params.id}).then(dbRes => {
      console.log(dbRes);
      res.render("celebrities/show", { celeb: dbRes});
    });
  });

  router.post("/delete-celebrity/:id", (req, res) => {
    // :id is a variable (wildcard)
    console.log(req.params);
    // req.params exposes the variable parts of this route
    // return res.send("@todo erase student");
  
    Celeb
      .findByIdAndDelete(req.params.id)
      .then(dbResult => {
        res.redirect("/celebrities");
      })
      .catch(dbError => {
        console.error(dbError);
        res.redirect("/celebrities");
      });
  });

  router.get("/celebrities/:id/edit", (req, res) => {
    Celeb.findOne({_id: req.params.id}).then(dbRes => {
      console.log(dbRes);
      res.render("celebrities/edit", { celeb: dbRes});
    })    
    .catch(dbErr => {
      console.log("err", dbErr);
    });
  });

  router.post("/celebrities/:id/edit", (req, res) => {
    Celeb
      .findByIdAndUpdate(req.params.id, req.body)
      .then(dbResult => {
        res.redirect("/celebrities");
      })
      .catch(dbError => {
        console.error(dbError);
        res.redirect("/celebrities");
      });  
    });

  module.exports = router;
