const express = require("express");
const celebritiesRouter = express.Router();

const Celebrity = require("./../models/Celebrity");

celebritiesRouter.get("/new", (req, res) => {
  res.render("celebrities/new");
});

celebritiesRouter.post("/new", (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase})
  .then((celebrity) => {
    res.redirect("/celebrities")
  })
  .catch( (err) => {
    res.render("celebrities/new");
  })
});

celebritiesRouter.get("/:celebrityId", (req, res, index) => {
  const celebrityId = req.params.celebrityId;
  Celebrity.findById(celebrityId)
    .then( (celebrityFound) => {
      const data = {celebrity: celebrityFound};
      res.render("celebrities/show", data);
    })
    .catch( (err) => console.log(err));
});

celebritiesRouter.post("/:celebrityId/delete", (req, res, next) => {
  const celebrityId = req.params.celebrityId;
  Celebrity.findByIdAndDelete(celebrityId)
    .then( (celebrity) => {
      res.redirect("/celebrities");
    })
    .catch( (err) => next(err));
});

celebritiesRouter.get("/", (req, res, next) => {
  Celebrity.find()
    .then( (celebritiesArr) => {
      const data = {celebrities: celebritiesArr};
      res.render("celebrities/index", data);
    })
    .catch( (err) => console.log(err));
});


module.exports = celebritiesRouter;