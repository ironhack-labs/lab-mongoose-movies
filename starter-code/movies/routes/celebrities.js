const express = require("express");
const Celebrity = require("../models/celebrity");
const router = express.Router();

router.get("/", (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/index", { celebrities: celebrities });
  });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/", (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save(err => {
    if (err) {
      return next(err);
    }
    // redirect to the list of products if it saves
    return res.redirect("/celebrities");
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

module.exports = router;
