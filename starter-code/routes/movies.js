const express = require("express");
const router = new express.Router();

const Movie = require("../models/movie");

  
  router.get("/movies", (req, res, next) => {
    Movie.find().then(dbRes => {
      console.log(dbRes);
      res.render("movies/index", { movie: dbRes})
      
    });
  });

  router.get("/movies/new", (req, res) => {
    // const data = {
    //   js: ["form"]
    // };
    res.render("movies/new")
    // , data
  });

  router.post("/movies/new", (req, res) => {
    Movie
      .create(req.body)
      .then(dbResult => {
        res.redirect("/movies");
      })
      .catch(dbError => {
        console.log(dbError);
        res.redirect("/movies/new");
      });
  }); 

  router.get("/movies/:id", (req, res) => {
    Movie.findOne({_id: req.params.id}).then(dbRes => {
      console.log(dbRes);
      res.render("movies/show", { movie: dbRes});
    });
  });

  router.post("/delete-movie/:id", (req, res) => {
    // :id is a variable (wildcard)
    console.log(req.params);
    // req.params exposes the variable parts of this route
    // return res.send("@todo erase student");
  
    Movie
      .findByIdAndDelete(req.params.id)
      .then(dbResult => {
        res.redirect("/movies");
      })
      .catch(dbError => {
        console.error(dbError);
        res.redirect("/movies");
      });
  });

  router.get("/movies/:id/edit", (req, res) => {
    Movie.findOne({_id: req.params.id}).then(dbRes => {
      console.log(dbRes);
      res.render("movies/edit", { movie: dbRes});
    })    
    .catch(dbErr => {
      console.log("err", dbErr);
    });
  });

  router.post("/movies/:id/edit", (req, res) => {
    Movie
      .findByIdAndUpdate(req.params.id, req.body)
      .then(dbResult => {
        res.redirect("/movies");
      })
      .catch(dbError => {
        console.error(dbError);
        res.redirect("/movies");
      });  
    });

  module.exports = router;
