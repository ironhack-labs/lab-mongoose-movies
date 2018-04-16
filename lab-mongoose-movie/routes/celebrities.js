const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

//  Routing to celebrities index
router.get("/", (req, res, next) => {
  Celebrity.find((err, celebrities) => {
    if (err) return next(err);
    res.render("celebrities", { celebrities });
  });
});

//  Routing to the individual celebrity
router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/show", { celebrity });
    })
    .catch(err => {
      next();
      return err;
    });
});

//  Routing to the form page
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

//  Routing the form data to the celebrity route
router.post("/", (req, res, next) => {
  //destructuring req.body into an object
  const catchPhrase = req.body.catchPhrase;
  const { name, occupation } = req.body;  
  const celebrity = new Celebrity({ name, occupation, catchPhrase });
  
  celebrity
    .save()
    .then(celebrity => {
      console.log(`${celebrity.name} added to the database.`);
      res.redirect("/celebrities");
    })
    // if values missing
    .catch(() => {
      res.render("celebrities/new");
    });
});

router.get("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next();
      return err;
    });
});

module.exports = router;
