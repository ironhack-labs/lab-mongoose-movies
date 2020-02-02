const express = require('express');
const router  = express.Router();
const celebrityModel = require('../models/celebrity')

router.get("/", (req, res) => {
  celebrityModel.find()
  .then(dbRes => {
    res.render("celebrities/index", { celebrities: dbRes });
  })
  .catch(err => console.log(err));
});

router.get("/:id", (req, res) => {
  celebrityModel
    .findById(req.params.id)
    .then(dbRes => {
      res.render("celebrities/show", { celebrity: dbRes });
    })
    .catch(err => console.log(err));
});

router.get("/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  // if some tests must be performed, do so before database query
  celebrityModel
    .create({
      name,
      occupation,
      catchPhrase
    })
    .then(dbRes => res.redirect("/"))
    .catch(dbErr => {
      console.log(dbErr);
      res.redirect("/new")
    });
});

router.get("/", (req, res) => {
  celebrityModel
    .find() // retreive all the documents in the artists collection
    .then(dbResults => {
      res.render("list-celebrites", {
        celebrities: dbResults
      });
    })
    .catch(dbErr => {
      console.log("OH NO ! Database error", dbErr);
    });
});

router.get("/:id/delete", (req, res) => {
  celebrityModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.redirect("/");
    })
    .catch(dbErr => {
      console.error(dbErr);
    });
});


module.exports = router;

