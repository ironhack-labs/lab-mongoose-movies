const express = require("express");
const router = express.Router();
const Celebrity = require("../model/celebrity");

// GET celebrities
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((data) => {
      res.render("celebrities", { data });
      // res.send(data)
    })
    .catch((error) => console.log(error));
});

//GET celeb infos
router.get("/celebrity/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((data) => {
      res.render("celebrity-details", { data });
      // res.send(data)
    })
    .catch((error) => console.log(error));
});

//GET new celeb
router.get("/celebrity-new", (req, res, next) => {
  res.render("celebrity-new");
});

//POST new celeb
router.post("/celebrity-new", (req, res, next) => {
  // res.send(req.body)
  Celebrity.create(req.body)
    .then((data) => {
      console.log("data added");
      res.redirect("/celebrities");
    })
    .catch((error) => console.log(error));
});

//GET delete celeb
router.get("/celebrity-delete/:id", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then((response) => {
      console.log(`${response} deleted`);
      res.redirect("/celebrities");
    })
    .catch((error) => console.log(error));
});

//GET edit celeb details
router.get("/celebrity-edit/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((response) => {
      res.render("celebrity-edit", { response });
    })
    .catch((error) => console.log(error));
});

//POST edit celeb details
router.post("/celebrity-edit/:id", (req, res, next) => {
  // res.send(req.body)
  Celebrity.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      console.log("data edited");
      res.redirect("/celebrities");
    })
    .catch((error) => console.log(error));
});

module.exports = router;
