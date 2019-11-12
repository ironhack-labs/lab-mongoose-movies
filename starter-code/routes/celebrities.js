const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then(documents => {
      res.render("../views/celebrities/index.hbs", {
        celebrityList: documents
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/new", (req, res, next) => {
  res.render("../views/celebrities/new.hbs");
  console.log("Success new get");
});

router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("../views/celebrities/edit.hbs", {
        celebrityEdit: celebrity
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("../views/celebrities/show.hbs", {
        celebrityDetails: celebrity
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/celebrity", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/:id/edit", (req, res, next) => {
  console.log("Inside router post edit");
  const { name, occupation, catchPhrase } = req.body;
  const editObj = {
    name,
    occupation,
    catchPhrase
  };
  console.log("editObj created");
  Celebrity.findByIdAndUpdate(req.params.id, editObj)
    .then(() => {
      console.log("Celebrity is updated");
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("The celebrity is deleted");
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
