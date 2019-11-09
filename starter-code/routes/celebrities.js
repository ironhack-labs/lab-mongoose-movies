const express = require("express");
const router = express.Router();
const celebritiesModel = require("./../models/celebrities");

router.get("/celebrities/index", (req, res) => {
  celebritiesModel
    .find()
    .then(dbRes => {
      console.log(dbRes);
      res.render("celebrities/index", { celebrities: dbRes });
    })
    .catch(e => console.log(e));
});

router.get("/celebrities/show/:id", (req, res) => {
  celebritiesModel
    .findOne({ _id: req.params.id })
    .then(dbRes => {
      console.log(dbRes);
      res.render("celebrities/show", { celebrity: dbRes });
    })
    .catch(e => console.log(e));
});

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/create-celeb", (req, res) => {
  const newCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  celebritiesModel
    .create(newCeleb)
    .then(dbRes => res.redirect("/celebrities/index"))
    .catch(e => res.redirect("/celebrities/new"));
  console.log(req.body);
});

router.post("/celebrities/:id/delete", (req, res) => {
  celebritiesModel
    .findByIdAndRemove(req.params.id)
    .then(dbres => res.redirect("/celebrities/index"))
    .catch(e => console.log(e));
});

router.get("/celebrities/:id/edit", (req, res) => {
  celebritiesModel
    .findById(req.params.id)
    .then(dbres => res.render("celebrities/edit", { celebrity: dbres }))
    .catch(e => console.log(e));
});

router.post("/celebrities/:id", (req, res) => {
  var celebEdited = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  console.log(celebEdited);
  celebritiesModel
    .findByIdAndUpdate(req.params.id, celebEdited)
    .then(dbRes => res.redirect("/celebrities/index"))
    .catch(e => console.log(e));
});
module.exports = router;
