const express = require("express");
const celebsRouter = express.Router();
const Celebrities = require("./../models/celebrities.js");

// ROUTES

celebsRouter.get("/", (req, res, next) => {
  Celebrities.find()
    .then((allCelebs) => {
      console.log("retrieving celebs");
      const data = { allCelebs: allCelebs };

      res.render("celebrities/index", data);
    })
    .catch((err) => next());
});

celebsRouter.get("/:celebId", (req, res, next) => {
  const { celebId } = req.params;

  Celebrities.findById(celebId)
    .then((oneCeleb) => {
      console.log("Found one celeb!");
      const data = { oneCeleb: oneCeleb };

      res.render("celebrities/show", data);
    })
    .catch((err) => {
      console.log("There's an error", err);
      next();
    });
});

// CREATE NEW CELEBRITY
celebsRouter.get("/new", (req, res, next) => {
  res.render("celebrities/new");
  console.log("you add a new celeb");
});
celebsRouter.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  console.log("celebsRouterpost");

  Celebrities.create({ name, occupation, catchPhrase })
    .then((data) => {
      console.log("It worked!!!");
      res.redirect("celebrities");
    })
    .catch((err) => {
      res.render("celebrities/new");
    });
});

celebsRouter.post("/:celebId/delete", (req, res, next) => {
  const { celebId } = req.params;

  Celebrities.findByIdAndRemove(celebId)
    .then((data) => res.redirect("/celebrities"))
    .catch((err) => {
      console.log("There's an error with finding & deleting one celebrity");
      next();
    });
});

// UPDATE
celebsRouter.get("/:celebId/edit", (req, res, next) => {
  const { celebId } = req.params;

  Celebrities.findById(celebId)
    .then((updateCeleb) => {
      const data = { updateCeleb: updateCeleb };
      res.render("celebrities/edit", data);
      console.log("fill the form");
    })
    .catch((err) => {
      console.log("There's an error with finding & deleting one celebrity");
      next();
    });
});
celebsRouter.post("/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  console.log("we are here");

  Celebrities.findByIdAndUpdate(id, { name, occupation, catchPhrase })
    .then((data) => res.redirect("/celebrities"))
    .catch((err) => {
      console.log("There's an error with updating one celebrity");
      next();
    });
});

module.exports = celebsRouter;

// const {title, description} = req.body;
