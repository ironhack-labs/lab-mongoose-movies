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

// GET     /celebrity
celebrityRouter.get("/:id", (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then((celebrity) => {
      console.log("celebrity data -->>>", celebrity);
      res.render("celebrities/show", celebrity);
    })
    .catch((err) => next(err));
});

module.exports = celebrityRouter;
