const express = require("express");
const Celebrity = require("../models/celebrity");
const celebritiesRouter = express.Router();

/* GET home page */
celebritiesRouter.get("/", (req, res, next) => {
  Celebrity.find()
    .then((allCelebrities) => {
      const data = {
        allCelebrities: allCelebrities,
      };
      console.log(allCelebrities);
      res.render("celebrities/index", data);
    })
    .catch((err) => {
      return next(err);
    });
});

celebritiesRouter.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

celebritiesRouter.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((oneCelebrity) => {
      const data = {
        oneCelebrity: oneCelebrity,
      };
      res.render("celebrities/show", data);
    })
    .catch((err) => console.log(err));
});

celebritiesRouter.get("/:id/edit", (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((oneCelebrity) => {
      const data = {
        oneCelebrity: oneCelebrity,
      };
      res.render("celebrities/edit", data);
    })
    .catch((err) => console.log(err));
});

celebritiesRouter.post("/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const { id } = req.params;
  Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase })
    .then((updatedCelebrity) => {
      res.redirect("/");
    })
    .catch((err) => res.render("celebrities/edit", data));
});

celebritiesRouter.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then((createdCelebrity) => {
      res.redirect("/");
    })
    .catch((err) => res.render("celebrities/new", data));
});

celebritiesRouter.post("/:id/delete", (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndRemove(id)
    .then((removedCelebrity) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

module.exports = celebritiesRouter;
