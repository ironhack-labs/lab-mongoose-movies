const express = require("express");
const router = express.Router();
const debug = require("../log")(__filename);

const Celebrity = require("../models/Celebrity");

/* CRUD -> Retrieve ALL */
router.get("/", (req, res) => {
  Celebrity.find().then(celebrities => {
    debug(celebrities);
    res.render("celebrity/celebrities_list", { celebrities });
  });
});

/* CRUD -> Create show form */
router.get("/new", (req, res) => {
  res.render("celebrity/celebrity_new");
});

/* CRUD -> Acquire form params and create the book object in DB */
router.post("/new", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  const celebrity = new Celebrity({ name, occupation, catchPhrase });
  celebrity.save().then(celebrity => {
    console.log(celebrity);
    res.redirect("clebrity/celebrity");
  });
});

/* CRUD -> Retrieve Detail */
router.get("/:id", (req, res) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    console.log(celebrity);
    res.render("celebrity/celebrity_detail", { celebrity });
  });
});

/* CRUD -> Udpate, show book update form */
router.get("/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("celebrity/celebrity_edit", { celebrity });
  });
});

/* CRUD -> Udpate, update the book in DB */
router.post("/:id/edit", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const updates = { name, occupation, catchPhrase };
  Celebrity.findByIdAndUpdate(req.params.id, updates).then(() => {
    res.redirect("/celebrity/celebrity");
  });
});

/* CRUD -> Delete the book in DB */
router.get("/:id/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/celebrity/celebrity");
  });
});

module.exports = router;
