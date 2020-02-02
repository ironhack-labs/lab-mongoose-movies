const express = require('express');
const router  = express.Router();
const celebrityModel = require("../models/Celebrity");

// = = = = = = =
// LIST CELEB
// = = = = = = =
router.get("/celebrities/index", (req, res) => {
  celebrityModel.find()
  .then(celebs => {
    res.render("celebrities/index", {celebs});
  })
  .catch(err => {
    console.log(err);
  });
});

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

// = = = = = = =
// CREATE CELEB
// = = = = = = =
router.post("/celebrities/new", (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  celebrityModel.create({
      name,
      occupation,
      catchPhrase
  })
  .then(dbres => {
      res.redirect("/celebrities/index");
  })
  .catch(dberr => {
      console.error(dberr);
      res.send("Oops... Failed.");
  });
});

// = = = = = = =
// SHOW CELEB
// = = = = = = =
router.get("/celebrities/show/:id", (req, res) => {
  celebrityModel.findById(req.params.id)
  .then(celebrity => {
    res.render("celebrities/show", {celebrity});
  })
  .catch(err => {
    console.error(err);
  });
});

// = = = = = = =
// DELETE CELEB
// = = = = = = =
router.post("/celebrities/:id/delete", (req, res) => {
  celebrityModel.findByIdAndDelete(req.params.id)
  .then(dbres => {
    res.redirect("/celebrities/index");
  })
  .catch(err => {
    console.error(err);
  });
});

// = = = = = = =
// EDIT CELEB
// = = = = = = =
router.get("/celebrities/:id/edit", (req, res) => {
  celebrityModel.findById(req.params.id)
  .then(celebrity => {
    res.render("celebrities/edit", {celebrity});
  })
  .catch(err => {
    console.error(err);
  });
});

router.post("/celebrities/:id/", (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  celebrityModel.findByIdAndUpdate(req.params.id, {
    name,
    occupation,
    catchPhrase
  })
  .then(dbres => {
    res.redirect("/celebrities/index");
  })
  .catch(err => {
    console.error(err);
  });
});

module.exports = router;
