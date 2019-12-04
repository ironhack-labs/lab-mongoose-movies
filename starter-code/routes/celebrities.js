const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", (req, res) => {
  Celebrity.find({})
    .then(docs => {
      res.render("celebrities/celebrities", { celebrities: docs });
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.get("/new", (req, res) => {
  res.render("celebrities/celebritiesForm");
});

router.get("/:celebrityId", (req, res) => {
  const celebrityId = req.params.celebrityId;
  Celebrity.findById(celebrityId).then(item => {
    res.render("celebrities/celebrityDetails", { celebrity: item });
  });
});

router.post("/", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
    .then(newCelebrity => {
      res.redirect("/celebrities/" + newCelebrity._id);
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.get("/:celebrityId/edit", (req, res) => {
  const celebrityId = req.params.celebrityId;
  Celebrity.findById(celebrityId)
    .then(item => {
      res.render("celebrities/celebrityEdit", { celebrity: item });
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.post("/:celebrityId", (req, res) => {
  const celebrityId = req.params.celebrityId;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.updateOne(
    { _id: celebrityId },
    {
      name,
      occupation,
      catchPhrase
    }
  )
    .then(_ => {
      res.redirect("/celebrities/" + celebrityId);
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.post("/:celebrityId/delete", (req, res) => {
  const celebrityId = req.params.celebrityId;
  Celebrity.findByIdAndRemove(celebrityId)
    .then(_ => {
      res.redirect("/celebrities");
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

module.exports = router;
