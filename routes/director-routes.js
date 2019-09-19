const express = require("express");
const router = express.Router();
const Director = require("../models/Director");
const Movie = require("../models/Movie");
const Actor = require("../models/Actor");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");

router.get("/directors", (req, res, next) => {
  Director.find()
    .then(allTheDirectors => {
      if (req.user) {
        allTheDirectors.forEach(eachDirector => {
          if (req.user._id.equals(eachDirector.creator) || req.user.isAdmin){
            eachDirector.mine = true;
          }
        });
      }
      res.render("director-views/index", { director: allTheDirectors });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/directors/details/:id", (req, res, next) => {
  let id = req.params.id;
  Director.findById(id)
    .then(directorObject => {
      Movie.find({
        director: id
      })
        .then(result => {
          console.log(result);
          res.render("director-views/show", {
            director: directorObject,
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

router.get("/directors/add-new", (req, res, next) => {
  if(!req.user){
    req.flash('error', "Please login to add a new director")
    res.redirect('/login');
}
  res.render("director-views/new");
});

router.post("/directors/creation", (req, res, next) => {
  let name = req.body.theName;
  let occupation = req.body.theOccupation;
  let catchPhrase = req.body.theCatchPhrase;
  let image = req.body.theImage;

  Director.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase,
    image: image
  })
    .then(result => {
      res.redirect("/directors/details/" + result._id);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/directors/delete/:id", (req, res, next) => {

  let id = req.params.id;
  Director.findByIdAndRemove(id)
    .then(result => {
      res.redirect("/directors");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/directors/edit/:id", (req, res, next) => {

  let id = req.params.id;
  Director.findById(id)
    .then(theDirector => {
      res.render("director-views/edit", { director: theDirector });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/directors/update/:id", (req, res, next) => {
  let id = req.params.id;
  Director.findByIdAndUpdate(id, {
    name: req.body.theName,
    occupation: req.body.theOccupation,
    catchPhrase: req.body.theCatchPhrase,
    image: req.body.theImage
  })
    .then(result => {
      res.redirect("/directors/details/" + id);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
