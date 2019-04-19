const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/index", {
        celebrities: celebrities
      });
    })
    .catch(next);
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(createdCeleb => {
    console.log(`The celebrity ${createdCeleb.name} was created`);
    res.redirect("/celebrities");
  });
});

router.get("/:celebId", (req, res, next) => {
  Celebrity.findById(req.params.celebId)
    .then(celebrityFromDb => {
      res.render("celebrities/show", {
        celebrity: celebrityFromDb
      });
    })
    .catch(next);
});

router.get("/:celebId/delete", (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.celebId)
    .then(deletedCeleb => {
      res.redirect("/celebrities");
    })
    .catch(next);
});

router.get("/:celebId/edit", (req, res, next) => {
  Celebrity.findById(req.params.celebId).then(celebrityFromDb => {
    res.render("celebrities/edit", {
      celeb: celebrityFromDb
    });
  });
});

router.post("/:celebId/edit", (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.celebId, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(next);
});

module.exports = router;
