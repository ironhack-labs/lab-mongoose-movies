const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../Model/Celebrity");

router.get("/", (req, res) => {
  CelebrityModel.find()
    .then(dbres => res.render("celebrities/index", { celebrities: dbres }))
    .catch(dberr => console.log(dberr));
});

var msg;
router.get("/new", (req, res) => {
  res.render("celebrities/new", { msg });
});

router.get("/:id", (req, res) => {
  CelebrityModel.findOne({ _id: req.params.id })
    .then(dbres => res.render("celebrities/show", { celebrity: dbres }))
    .catch(err => console.log(err));
});

router.get("/:id/edit", (req, res) => {
  CelebrityModel.findOne({ _id: req.params.id })
    .then(dbres => res.render("celebrities/edit", { celebrity: dbres }))
    .catch(err => console.log(err));
});

router.post("/", (req, res) => {
  const createCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  if (
    req.body.name !== "" &&
    req.body.occupation !== "" &&
    req.body.catchPhrase !== ""
  ) {
    const newCelebrity = new CelebrityModel(createCelebrity);
    newCelebrity
      .save()
      .then(dbres => res.redirect("/celebrities"))
      .catch(err => console.log(err));
  } else {
    msg = "please fill name field !";
    res.redirect("/celebrities/new");
  }
});

router.post("/:id/delete", (req, res) => {
  CelebrityModel.findByIdAndRemove(req.params.id)
    .then(dbres => res.redirect("/celebrities"))
    .catch(err => console.log(err));
});

router.post("/:id", (req, res) => {
  const editCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  CelebrityModel.findOneAndUpdate({ _id: req.params.id }, editCelebrity)
    .then(dbres => res.redirect("/celebrities"))
    .catch(err => console.log(err));
});

module.exports = router;
