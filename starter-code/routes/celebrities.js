var express = require("express");
var celebRouter = express.Router();
var Celebrity = require("./../models/Celebrity");

module.exports = celebRouter;

celebRouter.get("/new", (req, res) => {
  res.render("../views/celebrities/new");
});

celebRouter.post("/new", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(data => res.redirect("/celebrities"))
    .catch(err => console.log(err));
});

celebRouter.get("/celebrities/:id", (req, res) => {
  const celebID = req.params.id;
  Celebrity.findById(celebID)
    .then(celeb => {
      res.render("celebrities/show", celeb);
      console.log(celeb);
    })
    .catch(err => console.log(err));
});

celebRouter.post("/celebrities/:id/delete", (req, res) => {
  const celebID = req.params.id;
  Celebrity.findByIdAndRemove(celebID)
    .then(celeb => res.redirect("/celebrities"))
    .catch(err => res.render("celebrities/new"));
});

celebRouter.get("/", (req, res) => {
  Celebrity.find()
    .then(allCelebrities => {
      const data = { celebrities: allCelebrities };
      res.render("celebrities", data);
      console.log(allCelebrities.length);
    })
    .catch(err => console.log(err));
});
