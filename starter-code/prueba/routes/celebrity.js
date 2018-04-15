const express = require("express");
const router = express.Router();
//const debug = require("../log")(__filename);

const Celebrity = require("../models/Celebrity");

/* CRUD -> Create FORUMULARIO form */
router.get("/new", (req, res) => {
  res.render("new");
});

/* CRUD -> Acquire form params and create the celebrity object in DB */
router.post("/new", (req, res) => {
  const {
    name,
    occupation,
    catchPhrase,
  } = req.body;

  const celebrity = new Celebrity({
    name,
    occupation,
    catchPhrase
  });
  celebrity.save().then(celebrity => {
    console.log(celebrity);
    res.redirect("/celebrity");
  });
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    console.log(celebrity);
    res.render("show", {
      celebrity
    });
  })
});
module.exports = router;

/* CRUD -> Retrieve ALL */
router.get("/", (req, res) => {
  Celebrity.find().then(celebrities => {
      console.log(celebrities)
      res.render("celebrity_list", {
        celebrities
      });
    })
    .catch(error => {
      console.log(error)
    })

});

// CRUD -> Udpate, show book update form 
router.get("/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("edit", {
      celebrity
    });
  });
});

// CRUD -> Udpate, update the book in DB 
router.post("/:id/edit", (req, res) => {
  const {
    name,
    occupation,
    catchPhrase,
  } = req.body;
  const updates = {
    name,
    occupation,
    catchPhrase,
  };
  Celebrity.findByIdAndUpdate(req.params.id, updates).then(() => {
    res.redirect("/celebrity");
  });
});
/* CRUD -> Delete the book in DB */
router.get("/:id/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/celebrity");
  });
});
