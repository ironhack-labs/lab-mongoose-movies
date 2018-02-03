const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET Celebrities. */
router.get("/", (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) return next(err);

    res.render("./celebrities/index", {
      celebrities: celebrities
    });
  });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res, next) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchPhrase = req.body.catchPhrase;
  const celebrityInfo = {
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  };

  const celebrity = new Celebrity(celebrityInfo);

  celebrity.save(err => {
    if (err) return res.redirect("/celebrities/new");
    res.redirect("/celebrities/");
  });
});

router.get("/:id", (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/show", { celebrity: celebrity });
  });
});

router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celebrity) => {
    if (err) return next(err);
    res.render("celebrities/edit", {
      title: "Edit " + celebrity.name,
      celebrity: celebrity
    });
  });
});

router.post("/:id/", (req, res, next) => {
  Celebrity.findOneAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.occupation
    },
    (err, celebrity) => {
      if (err) next(err);
      res.redirect(`celebrities/${req.params.id}`);
    }
  );
});

router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id, (err, celebrity) => {
    if (err) return next(err);
    res.redirect("/celebrities/");
  });
});

module.exports = router;
