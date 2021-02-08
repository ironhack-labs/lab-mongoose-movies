var express = require("express");
var celebrityRouter = express.Router();
const Celebrity = require("./../models/celebrity");

// GET     /celebrity
celebrityRouter.get("/", (req, res, next) => {
  Celebrity.find()
    .then((allCelebrities) => {
      const data = {
        allCelebrities: allCelebrities,
      };
      console.log("celebrities", data);
      res.render("celebrities/index", data);
    })
    .catch((err) => next(err));
});

// GET     /celebrities/:id
celebrityRouter.get("/:id", (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then((celebrity) => {
      console.log("celebrity data -->>>", celebrity);
      res.render("celebrities/show", celebrity);
    })
    .catch((err) => next(err));
});

// POST     /celebrities/:id/delete
celebrityRouter.post("/:id/delete", (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId)
    .then((celebrity) => {
      console.log("deleted!");
      // res.redirect("/");
    })
    .catch((err) => next(err));
});

// GET /celebrities/new
celebrityRouter.get("/new", (req, res, next) => {
  console.log("========== at adding new celebs");
  // res.render("new");
});

module.exports = celebrityRouter;
