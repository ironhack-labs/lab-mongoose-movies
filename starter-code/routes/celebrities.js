// routes from celebrities

const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET celebritites page */
router.get("/celebrities", (req, res, next) => {
  Celebrity.find().then((celebrities) => {
    res.render("celebrities", { celebrities: celebrities });
  });
});

router.get("/celebrities/:celebId", (req, res) => {
  Celebrity.findById(req.params.celebId).then((celebrity) => {
    res.render("show", { celebrity: celebrity });
  });
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/celebrities", (req, res, next) => {
  const name = req.body.celebName;
  const ocupation = req.body.ocupation;
  const catchphrase = req.body.catchphrase;

  Celebrity.create({
    name: name,
    ocupation: ocupation,
    catchphrase: catchphrase,
  })
    .then((celebrity) => {
      console.log(`Success ${celebrity} was added to the database`);
      res.redirect(`/celebrities`);
    })
    .catch((err) => {
      res.render("new");
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  console.log("post delete?", req.params);
  Celebrity.findByIdAndRemove({ _id: req.params.id })
    .then((deletedCelebrity) => {
      console.log(`Success ${deletedCelebrity} was deleted from the database`);
      res.redirect(`/celebrities`);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/celebrities/:id/edit", (req, res) => {
  console.log("post edit?", req.params);

  Celebrity.findOne({ _id: req.params.id })
    .then((celebrity) => {
      res.render("edit", { celebrity: celebrity });
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/celebrities/:id/edit", (req, res) => {
  const name = req.body.celebName;
  const ocupation = req.body.ocupation;
  const catchphrase = req.body.catchphrase;

  Celebrity.update(
    { _id: req.params.id },
    {
      name: name,
      ocupation: ocupation,
      catchphrase: catchphrase,
    }
  )
    .then((celebrity) => {
      res.redirect(`/celebrities`);
    })
    .catch((err) => {
      res.render("new");
    });
});

module.exports = router;
