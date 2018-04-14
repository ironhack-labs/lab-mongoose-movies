const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) return next(err);
    res.render("celebrities/index", {
      celebrities: celebrities
    });
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
  console.log(newCelebrity);
  newCelebrity.save(err => {
    if (err) return next(err);
    // if (newCelebrity.errors) {
    //   return res.render("celebrities/new", {
    //     title: "Celebrities",
    //     errors: newCelebrity.errors,
    //     celebrity: newCelebrity
    //   });
    // }
    return res.redirect("/celebrities");
  });
});

router.get("/:id", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) return next(err);
    res.render("celebrities/show", {
      celebrity: celebrity
    });
  });
});

router.post("/:id/delete", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId, (err, celebrity) => {
    if (err) return next(err);
    return res.redirect("/celebrities");
  });
});

router.get("/:id/edit", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) return next(err);
    res.render("celebrities/edit", {
      celebrity: celebrity
    });
  });
});

router.post("/:id", (req, res, next) => {
  const celebrityId = req.params.id;
  const updates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(celebrityId, updates, (err, celebrity) => {
    if (err) return next(err);
    return res.redirect("/celebrities");
  });
});

module.exports = router;
