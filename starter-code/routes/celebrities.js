const express = require("express");
const router = new express.Router();

const celebrityModel = require("./../models/Celebrity");

router.get("/celebrities", (req, res) => {
  celebrityModel
    .find()
    .then(dbRes => {
      // console.log(dbRes);
      res.render("celebrities/index", {
        celebrities: dbRes
      });
      // Lien dans l'index pour le for each
      // Appel de toute l'array d'objet grâce à dbRes
    })
    .catch(err => console.log(err));
});

router.get("/celebrities/new", (req, res) => {
  celebrityModel
    .find()
    .then(dbRes => {
      res.render("./../views/celebrities/new.hbs");
    })
    .catch(err => console.log(err));
});

router.post("/celebrities", (req, res) => {
  const newCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  celebrityModel
    .create(newCelebrity)
    .then(dbRes => {
      console.log(dbRes);
      res.redirect("/celebrities");
    })
    .catch(err => {
      res.render("./../views/celebrities/new.hbs");
    });
});
router.post("/celebrities/:id/delete", (req, res) => {
  celebrityModel
    .findOneAndRemove({ _id: req.params.id })
    .then(res.redirect("/celebrities"))
    .catch(err => console.log(err));
});

router.get("/celebrities/:id", (req, res) => {
  celebrityModel
    .findOne({ _id: req.params.id })
    .then(dbRes => {
      res.render("celebrities/show", {
        celebrity: dbRes
      });
    })
    .catch(err => console.log(err));
});
router.get("/celebrities/:id/edit", (req, res) => {
  celebrityModel
    .findOne({ _id: req.params.id })
    .then(dbRes => {
      res.render("./../views/celebrities/edit.hbs", { celebrity: dbRes });
    })
    .catch(err => console.log(err));
});

router.post("/celebrities/:id/edit", (req, res) => {
  console.log("iiciiiiii");
  console.log(req.body);
  const editCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  celebrityModel
    .findByIdAndUpdate(req.params.id, editCelebrity)
    .then(dbRes => {
      // console.log(dbRes);
      console.log(dbRes);
      res.redirect("/celebrities");
    })
    .catch(err => {
      res.render("./../views/celebrities/edit.hbs");
    });
});

module.exports = router;
