const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* Listing the Celebrities */
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebritiesAll => {
      res.render("celebrities/index", { celebritiesAll });
    })
    .catch(error => {
      next(error);
    });
});

//Adding New Celebrities
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res, next) => {
  const { name, occupation, catchPhase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhase });
  newCelebrity
    .save()
    .then(celebrityDoc => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      res.render("/celebrities/new");
    });
});

//Deleting Celebrities
router.post("/celebrities/:id/delete", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findByIdAndRemove({ _id: celebrityId })
    .then(celebrity => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      next(error);
    });
});

//Editing Celebrities
router.get("/celebrities/edit/:id", (req, res, next) => {
  Celebrity.findOne({ _id: req.params.id })
    .then(celebrityEdit => {
      res.render("celebrities/edit", { celebrityEdit });
    })
    .catch(error => {
      next(error);
    });
});

router.post("/celebrities/edit/:id", (req, res, next) => {
  const { name, occupation, catchPhase } = req.body;
  Celebrity.update(
    { _id: req.params.id },
    { $set: { name, occupation, catchPhase } },
    { new: true }
  )
    .then(celebrity => {
      res.redirect("/celebrities" + req.params.id);
    })
    .catch(error => {
      next(error);
    });
});

//The Celebrity Details Page
router.get("/celebrities/:id", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({ _id: celebrityId })
    .then(celebrityDetail => {
      res.render("celebrities/show", { celebrityDetail });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
