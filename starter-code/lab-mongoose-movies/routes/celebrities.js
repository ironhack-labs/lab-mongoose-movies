const express = require("express");
const Celebrity = require("../models/celebrity");
const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebFromDb => {
      res.locals.celebList = celebFromDb;
      res.render("celebrities/index");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("new");
});

router.post("/process-celeb", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebDetails => {
      res.locals.id = req.params.id;
      res.locals.celeb = celebDetails;
      res.render("celebrities/edit");
    })
    .catch(err => {
      next(err);
    });
});

router.post("/process-edit/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(
    req.params.id,
    {
      name,
      occupation,
      catchPhrase
    },
    { runValidators: true }
  )
    .then(() => {
      res.redirect(`/celebrities/${req.params.id}`);
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
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebDetails => {
      res.locals.id = req.params.id;
      res.locals.celeb = celebDetails;
      res.render("celebrities/show");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
