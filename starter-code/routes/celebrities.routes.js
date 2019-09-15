const express = require("express");
const celebritiesRouter = express.Router();
const Celebrities = require("./../models/Celebrities");

celebritiesRouter.get("/", (req, res) => {
  console.log("Rendering celebrities");
  Celebrities.find().then(allCelebrities => {
    res.render("celebrities/index", {
      allCelebrities: allCelebrities
    });
  });
});

celebritiesRouter.get("/:id", (req, res) => {
  Celebrities.findById(req.params.id).then(celebritie => {
    res.render('celebrities/detail', {
      celebritie: celebritie
    })
  })
})

module.exports = celebritiesRouter;
