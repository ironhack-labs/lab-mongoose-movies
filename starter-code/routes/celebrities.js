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

celebsRouter.get("/:celebrityId", (req, res) => {
  const celebrityId = req.params.celebrityId;

  Celebrity.findById(celebrityId)
  .then( (celebrity) => {
      res.render("celebrities/show", {celebrity})
  })
  .catch( (err) => console.log(err));
});


module.exports = celebsRouter;
