const express = require("express");
const Celebrity = require("../models/Celebrity");
const router = express.Router();

router.get("/", (req, res) => {
  Celebrity.find().then(celebrity => {
    res.render("celebrity/index", { celebrity });
  });
});

router.get("/new", (req, res) => {
  res.render("celebrity/new");
});
router.post("/new", (req, res) => {
  const { name, occupation, catchPhrase} = req.body;
  const celebrity = new Celebrity({ name, occupation, catchPhrase});
  celebrity.save().then(celebrity =>{
    res.redirect("/celebrity");
  })
});

router.get("/:id", (req, res) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("celebrity/show", { celebrity });
  });
});
router.post("/:id/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/celebrity");
  })
})
router.get("/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("celebrity/edit",  celebrity );
  });
});
router.post("/:id/edit", (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  const updatecelebrity = {name, occupation, catchPhrase};
  Celebrity.findByIdAndUpdate(req.params.id, updatecelebrity).then(() => {
    res.redirect("/celebrity");
  });
});
module.exports = router;
