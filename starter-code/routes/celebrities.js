const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/", (req, res) => {
  Celebrity.find().then((celebritiesFound) => {
    console.log("Here are your celebrities: ", celebritiesFound);
    res.render("celebrities/index", { celebrities: celebritiesFound });
  });
});

router.get("/new", (req, res) => {
  console.log("Visiting the page with the form to add a celeb");
  res.render("celebrities/new");
});

router.post("/new-celebrity", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({
    name,
    occupation,
    catchPhrase,
  })
    .then((createdCeleb) => {
      console.log("Here is the celeb you created: ", createdCeleb);
      res.redirect(`/celebrities/${createdCeleb._id}`);
    })
    .catch((err) => {
      console.log("There was an error: ", err);
    });
});

router.get("/:id/edit", (req, res) => {
  const { celebrityID } = req.params;
  Celebrity.findById(celebrityID)
    .then((celebrityToEdit) => {
      res.render("celebrities/edit", { celebrityToEdit });
    })
    .catch((err) => {
      console.log("There was an error: ", err);
    });
});

router.get("/:celebrityID", (req, res) => {
  const { celebrityID } = req.params;
  Celebrity.findById(celebrityID)
    .then((celebrityFoundViaID) => {
      console.log("Here is what you were looking for:", celebrityFoundViaID);
      res.render("celebrities/show", { celebrityFoundViaID });
    })
    .catch((err) => {
      console.log("There was an error: ", err);
    });
});

router.post("/:celebrityID", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase,
  }).then(() => {
    res.redirect("/celebrities").catch((err) => {
      console.log("There was an error: ", err);
    });
  });
});

router.post("/:celebrityID/delete", (req, res) => {
  const { celebrityID } = req.params;
  Celebrity.findByIdAndRemove(celebrityID).then((obliteratedCeleb) => {
    res.redirect("/celebrities").catch((err) => {
      console.log("There was an error: ", err);
    });
  });
});

module.exports = router;
