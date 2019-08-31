const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");

// mongoose
//   // find the correct database to connect to
//   .connect("mongodb://localhost/Celebrities", { useNewUrlParser: true })
//   .then(x => {
//     console.log(
//       `Connected to Mongo! Database name: "${x.connections[0].name}"`
//     );
//   })
//   .catch(err => {
//     console.error("Error connecting to mongo", err);
//   });

/* GET celebrities page */
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities.length);
      res.render("celebrities/index", { celebrities });
    })
    .catch(dbErr => {
      console.log(dbErr, "went wrong");
      next();
    });
});

// if you dont put new in front of /:id route it will pass in new as an id

router.get("/:id/edit", (req, res, next) => {
  const IDpar = req.params.id;
  Celebrity.findById(IDpar)
    .then(celebrity => {
      res.render("celebrities/edit", { celebrity });
    })
    .catch(dbErr => {
      console.log("db error during editing", dbErr);
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

// router.get("/:id/edit"),
//   (req, res) => {
//     Celebrity.findOne(req.params.id)
//       .then(dbres => {
//         res.render("/celebrities/edit", dbres);
//       })
//       .call();
//   };

router.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  const IDpar = req.params.id;
  console.log(IDpar);
  Celebrity.findById(IDpar)
    .then(celebrity => {
      res.render("celebrities/show", celebrity);
    })
    .catch(dbErr => {
      console.log(dbErr, "database error it went wrong");
    });
});

router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const celebrity = new Celebrity({ name, occupation, catchPhrase });
  celebrity
    .save()
    .then(dbRes => {
      console.log(dbRes, "was saved");
      res.redirect("/celebrities");
    })
    .catch(dbErr => {
      console.log("try again", dbErr);
      res.render("celebrities/new");
    });
});

// http://localhost:3000/celebrities/delete/5d68e6c5fe2d0f2304dc3bdd?

router.post("/:id/delete", (req, res) => {
  console.log(req.params.id);
  console.log("YATAAAA");
  Celebrity.findOneAndRemove({ _id: req.params.id })
    .then(deletedCelebrity => {
      console.log(deletedCelebrity, "was deleted");
      res.redirect("/celebrities");
    })
    .catch(dbErr => {
      console.log("there was an error", dbErr);
      next();
    });
});

router.post("/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update({ _id: req.params.id }, { name, occupation, catchPhrase })
    .then(dbRes => {
      console.log(dbRes, "good update!");
      res.redirect("/celebrities");
    })
    .catch(dbErr => {
      console.log(dbErr, "db error with update");
      next();
    });
});

module.exports = router;
