const express = require("express");
const router = express.Router();
const Director = require("../models/Director");
const Movie = require("../models/Movie");
const Actor = require("../models/Actor")
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");

router.get("/actors", (req, res, next) => {
  Actor.find()
    .then(allTheActors => {
      if (req.user) {
        allTheActors.forEach(eachActor => {
          if (req.user._id.equals(eachActor.creator) || req.user.isAdmin){
            eachActor.mine = true;
          }
        });
      }
      res.render("actor-views/index", { actor: allTheActors });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/actors/details/:id", (req, res, next) => {
  let id = req.params.id;
  Actor.findById(id)
    .then(actorObject => {
      Movie.find({
        starring: id
      })
        .then(result => {
          console.log(result);
          res.render("actor-views/show", {
            actor: actorObject,
            filteredMovies: result
          });
        })
        .catch(err => {
          next(err);
        });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/actors/add-new", (req, res, next) => {
  if(!req.user){
    req.flash('error', "Please login to add a new actor")
    res.redirect('/login');
}
  res.render("actor-views/new");
});

router.post("/actors/creation", (req, res, next) => {
  let name = req.body.theName;
  let nominations = req.body.theNominations;
  let awards = req.body.theAwards;
  let quote = req.body.theQuote;
  let image = req.body.theImage;

  Actor.create({
    name: name,
    nominations: nominations,
    awards: awards,
    quote: quote,
    image: image
  })
    .then(result => {
      res.redirect("/actors/details/" + result._id);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/actors/delete/:id", (req, res, next) => {
  let id = req.params.id;
  Actor.findByIdAndRemove(id)
    .then(result => {
      res.redirect("/actors");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/actors/edit/:id", (req, res, next) => {

  let id = req.params.id;
  Actor.findById(id)
    .then(theActor => {
      res.render("actor-views/edit", { actor: theActor });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/actors/update/:id", (req, res, next) => {
  let id = req.params.id;
  Actor.findByIdAndUpdate(id, {
    name: req.body.theName,
    nominations: req.body.theNominations,
    awards: req.body.theAwards,
    quote: req.body.theQuote,
    image: req.body.theImage
  })
    .then(result => {
      res.redirect("/actors/details/" + id);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
