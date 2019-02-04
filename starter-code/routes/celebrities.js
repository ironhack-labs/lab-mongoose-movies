const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      /* console.log(celebrities) */
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res, next) => {
  /* console.log(req.body) */
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity
    .save()
    .then(celebrity => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      /* console.log(error) */
      res.render("celebrities/new");
    });
});

router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      /*  console.log(celebrity.name) */
      res.render("celebrities/edit", celebrity);
    })
    .catch(error => {
      /* console.log(error) */
      res.send("an error has ocurred");
    });
});

router.post("/:id/edit", (req, res, next) => {
  console.log(req.params)
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update(
    { _id: req.params.id },
    { $set: { name, occupation, catchPhrase } },
    { new: true }
  )
    .then(celebrity => {
      console.log(req.params.id)
      res.redirect("/");
    })
    .catch(error => {
      /* console.log(error) */
      res.send("an error has ocurred");
    });
});

router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      /* console.log(error) */
      res.send("an error has ocurred");
    });
});

router.get("/:id", (req, res, next) => {
  /* console.log(req.params.id) */
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      console.log(celebrity);
      res.render("celebrities/show", celebrity);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
