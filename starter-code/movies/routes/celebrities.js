const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
  .then(celebritiesList => {
    res.render("celebrities/index", {
      celebrities: celebritiesList
    });
  })
  .catch(err => {
    next(err);
  });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    res.render("celebrities/show", {celebrity});
  })
  .catch(err => {
    next(err);
  });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    res.render("celebrities/edit", {celebrity});
  })
  .catch(err => {
    next(err);
  });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect("/celebrities");
  })
  .catch(err => {
    next(err);
  })
});

router.post("/celebrities", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;

  Celebrity.create({name, occupation, catchPhrase})
  .then(() => {
    res.redirect("/celebrities");
  })
  .catch(err => {
    res.redirect("/celebrities/new");
  });
});

router.post("/celebrities/:id", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;

  Celebrity.findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase}, {runValidators: true})
  .then(() => {
    res.redirect("/celebrities");
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;