const express = require("express");
const celebritiesRouter = express.Router();
const Celebrity = require("./../models/celebrity-model");

celebritiesRouter.get("/", (req, res, next) => {
  Celebrity.find()
    .then((allCelebrities) => {
      const data = {
        all: allCelebrities,
      };
      console.log(allCelebrities);

      res.render("celebrities/index", data);
    })

    .catch((error) => {
      next();
      return error;
    });
});

celebritiesRouter.get("/:celebrityID", (req, res, next) => {
  const celebrityID = req.params.celebrityID;

  Celebrity.findById(celebrityID)
    .then((found) => {
      const data = {
        found: found,
      };

      res.render("celebrities/show", data);
    })

    .catch((error) => {
      next();
      return error;
    });
});

celebritiesRouter.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

celebritiesRouter.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then((created) => {
      res.redirect("/celebrities");
    })
    .catch((err) => console.log(err));
});

celebritiesRouter.post("/:celebrityID/delete", (req, res, next) => {
  const celebrityID = req.params.celebrityID;

  Celebrity.findByIdAndDelete(celebrityID)
    .then((deleted) => {
      res.redirect("/celebrities");
    })
    .catch((err) => console.log(err));
});


module.exports = celebritiesRouter;
