const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");


router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("./celebrities/index", { celebrities });
    })
    .catch(err => {
      next();
    });
});


router.get("/new", (req, res, next) => {
  res.render("./celebrities/new");
});

router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const celebrity = new Celebrity({ name, occupation, catchPhrase });
  celebrity
    .save()
    .then(celebrity => {
      res.redirect("/celebrities");
    })

    .catch(err => {
      next();
    });
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrities => {
      res.render("./celebrities/show", { celebrities });
    })
    .catch(err => {
      next();
    });
});

router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrities => {
      res.render("./celebrities/edit", { celebrities});
    })

    .catch(err => {
      next();
    });
});

router.post("/:id/edit", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const updates = { name, occupation, catchPhrase };
  Celebrity.findByIdAndUpdate(req.params.id, updates).then(() => {
    res.redirect("/celebrities");
  })
  .catch(err => {
    next();
  });
});

router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next();
    });
});

module.exports = router;
