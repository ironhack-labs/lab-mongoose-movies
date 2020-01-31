const express = require("express");
const router = new express.Router();
const teamModel = require("../models/Team.js");




router.get("/all-teams", (req, res) => {
    teamModel
      .find()
      .then(teams => {
        res.render("teams/index", {
            teams
        })
      })
      .catch(dbErr => {
        console.log("OH NO ! Database error", dbErr);
      })
  });

  router.get("/team/new", (req, res) => {
    res.render("teams/form-team");
  });
  
  router.post("/create-team", (req, res) => {
    const { name, game, description } = req.body;
    // if some tests must be performed, do so before database query
    teamModel
      .create({
        name,
        game,
        description
      })
      .then(dbRes => res.redirect("/all-teams"))
      .catch(dbErr => {
        console.log(dbErr);
        res.send("OH NO, an error occured while creating new artist !");
      });
  });
  
  router.get("/team/:id", (req, res) => {
    // console.log(req.params.id);
    teamModel
      .findById(req.params.id)
      .then(team => {
        res.render("teams/page-team", { team });
      })
      .catch(dbErr => console.error("OH no, db err :", dbErr));
  });
  
  router.get("/team/update/:id", (req, res) => {
    teamModel
      .findById(req.params.id)
      .then(dbRes => {
        res.render("teams/form-team-update", { team: dbRes });
      })
      .catch(dbErr => console.error(dbErr));
  });
  
  router.post("/team/update/:id", (req, res) => {
    // console.log(req.params.id); // access vars declared in the route
    // console.log(req.body); // access the posted data
    const { name, game, description } = req.body;
  
    teamModel.findByIdAndUpdate(req.params.id, {
      name,
      game,
      description
    })
    .then(dbRes => {
      res.redirect("/all-teams");
    })
    .catch(dbErr => {
      console.error(dbErr)
    });
  });
  
  router.get("/team/delete/:id", (req, res) => {
    teamModel
      .findByIdAndDelete(req.params.id)
      .then(dbRes => {
        res.redirect("/all-teams");
      })
      .catch(dbErr => {
        console.error(dbErr);
      });
  });

  module.exports = router;