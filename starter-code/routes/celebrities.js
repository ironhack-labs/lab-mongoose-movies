const express = require("express");
const celebsRouter = express.Router();

const Celebrity = require("./../models/celebrity");

celebsRouter.get("/", (req, res) => {
  Celebrity.find({})
    .then((celebrities) => {
      res.render("celebrities/index", { celebrities });
    })
    .catch((error) => {
      console.log(error);
    });
});

celebsRouter.get("/new", (req, res) => {
    res.render("celebrities/new")
})

celebsRouter.post("/", (req, res) => {
    const {name, occupation, catchPhrase} = req.body
    const newCelebrity = new Celebrity({name, occupation, catchPhrase})
    newCelebrity
    .save()
    .then( () => res.redirect("/celebrities"))
    .catch( (err) => {
        res.redirect("/celebrities/new")
        console.log(err)
    })
})

celebsRouter.get("/:celebrityId", (req, res) => {
  const celebrityId = req.params.celebrityId;

  Celebrity.findById(celebrityId)
  .then( (celebrity) => {
      res.render("celebrities/show", {celebrity})
  })
  .catch( (err) => console.log(err));
});


module.exports = celebsRouter;
