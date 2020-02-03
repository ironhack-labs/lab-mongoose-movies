const express = require("express");
const router = express.Router();
const celebrityModel = require("./../models/celebrity.js");

router.get("/index", (req, res) => {
  celebrityModel
    .find()
    .then(dbResults => {
      res.render("./celebrities/index", {
        celebrities: dbResults
      });
    })
    .catch(dbErr => {
      console.log("OH NO ! Database error", dbErr);
    });
});

router.get("/index/:id", (req, res) => {
  // console.log(req.params.id);
  celebrityModel
    .findById(req.params.id)
    .then(celebrity => {
      res.render("./celebrities/show", { celebrity });
    })
    .catch(dbErr => console.error("OH no, db err :", dbErr));
});

router.get("/celebrities", (req, res, next) => {
  res.render("index");
});

router.get("/new", (req, res) => {
  // console.log(req.params.id);
  res.render("./celebrities/new");
});

router.post("/", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  // if some tests must be performed, do so before database query
  celebrityModel
    .create({
      name,
      occupation,
      catchPhrase
    })
    .then(dbRes => res.redirect("./celebrities/index"))
    .catch(dbErr => {
      res.redirect("./celebrities/new");
      console.log(dbErr);
      res.send("OH NO, an error occured while creating new celebrity !");
    });
});

router.post("/:id/delete", (req, res) => {
  celebrityModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.redirect("/celebrities/index");
    })
    .catch(dbErr => {
      console.error(dbErr);
    });
});

module.exports = router;
